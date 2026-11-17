(function () {
  "use strict";

  var SITE = window.SITE;
  var I18N = window.I18N;
  var CACHE_KEY = "portfolio-repos-v1";
  var CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour, to stay well under GitHub's anonymous rate limit
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // GitHub linguist colours for the languages likely to appear.
  var LANG_COLORS = {
    "Java": "#b07219", "Kotlin": "#A97BFF", "C#": "#178600", "PHP": "#4F5D95",
    "JavaScript": "#f1e05a", "TypeScript": "#3178c6", "Python": "#3572A5",
    "HTML": "#e34c26", "CSS": "#663399", "Shell": "#89e051", "Dockerfile": "#384d54"
  };

  var state = { lang: detectLang(), repos: null, error: false, filter: "all" };

  /* ---------- helpers ---------- */

  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
  }
  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
  }
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }
  function detectLang() {
    var saved = safeGet("portfolio-lang");
    if (saved === "en" || saved === "fr") return saved;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("fr") === 0 ? "fr" : "en";
  }
  function formatDate(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString(state.lang === "fr" ? "fr-CA" : "en-CA", { year: "numeric", month: "2-digit" });
  }
  function slug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function projectTitle(repo, extra) {
    if (extra.title && typeof extra.title === "object") return extra.title[state.lang] || extra.title.en;
    return extra.title || repo.name;
  }

  /* ---------- static text ---------- */

  function applyStaticText() {
    document.documentElement.lang = state.lang;
    document.title = t("meta.title");
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    var toggle = document.getElementById("lang-toggle");
    toggle.textContent = state.lang === "en" ? "FR" : "EN";
    toggle.setAttribute("aria-label", t("lang.switch"));
  }

  /* ---------- typing effect on the first command ---------- */

  function typeCommand() {
    var node = document.getElementById("typed-cmd");
    var text = t("hero.typed");
    if (reduceMotion) { node.textContent = text; return; }
    node.textContent = "";
    var i = 0;
    (function step() {
      node.textContent = text.slice(0, i);
      if (i++ < text.length) window.setTimeout(step, 90);
    })();
  }

  /* ---------- log (experience + education) ---------- */

  function renderLog(listId, items) {
    var list = document.getElementById(listId);
    list.textContent = "";
    items.forEach(function (item) {
      var data = item[state.lang];
      var li = el("li", "log-line" + (item.tech ? " is-tech" : ""));
      var range = item.start + (item.end === item.start ? "" : "→" + (item.end || t("experience.present")));
      li.appendChild(el("span", "log-date", "[" + range + "]"));
      var body = el("div", "log-body");
      var role = el("p", "log-role", data.role);
      if (item.tech) role.appendChild(el("span", "tag-it", t("experience.tech")));
      body.appendChild(role);
      body.appendChild(el("p", "log-org", data.org + (data.place ? " — " + data.place : "")));
      li.appendChild(body);
      list.appendChild(li);
    });
  }

  /* ---------- skills as JSON ---------- */

  function renderSkills() {
    var box = document.getElementById("skills-json");
    box.textContent = "";
    var groups = [
      [t("skills.languages"), SITE.skills.languages],
      [t("skills.frameworks"), SITE.skills.frameworks],
      [t("skills.soft"), SITE.skills.soft[state.lang]]
    ];
    box.appendChild(el("span", "j-punct", "{"));
    groups.forEach(function (g, gi) {
      var row = el("div", "j-row");
      row.appendChild(el("span", "j-key", '"' + g[0] + '"'));
      row.appendChild(el("span", "j-punct", ": ["));
      var values = el("span", "j-values");
      g[1].forEach(function (v, vi) {
        values.appendChild(el("span", "j-str", '"' + v + '"'));
        if (vi < g[1].length - 1) values.appendChild(el("span", "j-punct", ", "));
      });
      row.appendChild(values);
      row.appendChild(el("span", "j-punct", "]" + (gi < groups.length - 1 ? "," : "")));
      box.appendChild(row);
    });
    box.appendChild(el("span", "j-punct", "}"));
  }

  /* ---------- projects ---------- */

  function loadRepos() {
    var cached = safeGet(CACHE_KEY);
    if (cached) {
      try {
        var parsed = JSON.parse(cached);
        if (Date.now() - parsed.time < CACHE_TTL_MS && Array.isArray(parsed.repos)) {
          state.repos = parsed.repos;
          renderProjects();
          return;
        }
      } catch (e) { /* ignore broken cache */ }
    }

    var url = "https://api.github.com/users/" + encodeURIComponent(SITE.githubUser) +
      "/repos?per_page=100&type=owner&sort=pushed";
    fetch(url, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (res) {
        if (!res.ok) throw new Error("GitHub API " + res.status);
        return res.json();
      })
      .then(function (data) {
        state.repos = data.map(function (r) {
          return {
            name: r.name, description: r.description, url: r.html_url, homepage: r.homepage,
            language: r.language, topics: r.topics || [], stars: r.stargazers_count,
            pushed: r.pushed_at, fork: r.fork, archived: r.archived
          };
        });
        safeSet(CACHE_KEY, JSON.stringify({ time: Date.now(), repos: state.repos }));
        renderProjects();
      })
      .catch(function () {
        if (cached) {
          try { state.repos = JSON.parse(cached).repos; renderProjects(); return; } catch (e) { /* fall through */ }
        }
        state.error = true;
        renderProjects();
      });
  }

  function visibleRepos() {
    var hidden = SITE.hiddenRepos.map(function (n) { return n.toLowerCase(); });
    return (state.repos || [])
      .filter(function (r) { return !r.fork && !r.archived && hidden.indexOf(r.name.toLowerCase()) === -1; })
      .sort(function (a, b) {
        var fa = (SITE.projects[a.name] || {}).featured || 999;
        var fb = (SITE.projects[b.name] || {}).featured || 999;
        if (fa !== fb) return fa - fb;
        return new Date(b.pushed) - new Date(a.pushed);
      });
  }

  function renderFilters(repos) {
    var bar = document.getElementById("project-filters");
    bar.textContent = "";
    var langs = [];
    repos.forEach(function (r) { if (r.language && langs.indexOf(r.language) === -1) langs.push(r.language); });
    if (langs.length < 2) return;
    bar.appendChild(el("span", "filters-label", "--lang="));
    ["all"].concat(langs.sort()).forEach(function (lang) {
      var btn = el("button", "filter", lang === "all" ? t("projects.all") : lang.toLowerCase());
      btn.type = "button";
      btn.setAttribute("aria-pressed", String(state.filter === lang));
      btn.addEventListener("click", function () { state.filter = lang; renderProjects(); });
      bar.appendChild(btn);
    });
  }

  function projectCard(repo, index) {
    var extra = SITE.projects[repo.name] || {};
    var title = projectTitle(repo, extra);
    var card = el("article", "project");

    var head = el("div", "project-head");
    head.appendChild(el("span", "project-perm", "drwxr-xr-x"));
    head.appendChild(el("span", "project-index", String(index + 1).padStart(2, "0")));
    card.appendChild(head);

    var h3 = el("h3", "project-title");
    h3.appendChild(el("span", "project-slash", "~/"));
    h3.appendChild(document.createTextNode(slug(repo.name)));
    card.appendChild(h3);
    card.appendChild(el("p", "project-name", title));

    card.appendChild(el("p", "project-desc", extra[state.lang] || repo.description || ""));

    var topics = repo.topics.filter(function (tp) { return tp !== "portfolio"; }).slice(0, 5);
    if (topics.length) {
      var ul = el("ul", "topics");
      topics.forEach(function (tp) { ul.appendChild(el("li", "topic", "#" + tp)); });
      card.appendChild(ul);
    }

    var foot = el("div", "project-foot");
    var meta = el("p", "project-meta");
    if (repo.language) {
      var dot = el("span", "lang-dot");
      dot.style.background = LANG_COLORS[repo.language] || "var(--muted)";
      meta.append(dot, document.createTextNode(repo.language));
      meta.appendChild(el("span", "sep", "·"));
    }
    meta.appendChild(document.createTextNode(t("projects.updated") + " " + formatDate(repo.pushed)));
    if (repo.stars > 0) {
      meta.appendChild(el("span", "sep", "·"));
      meta.appendChild(document.createTextNode("★ " + repo.stars));
    }
    foot.appendChild(meta);

    var links = el("div", "project-links");
    var code = el("a", "link", "[" + t("projects.code") + "]");
    code.href = repo.url; code.target = "_blank"; code.rel = "noopener";
    code.setAttribute("aria-label", t("projects.code") + " — " + title);
    links.appendChild(code);
    if (repo.homepage && /^https?:\/\//.test(repo.homepage)) {
      var demo = el("a", "link", "[" + t("projects.demo") + "]");
      demo.href = repo.homepage; demo.target = "_blank"; demo.rel = "noopener";
      links.appendChild(demo);
    }
    foot.appendChild(links);
    card.appendChild(foot);
    return card;
  }

  function renderProjects() {
    var grid = document.getElementById("project-grid");
    grid.textContent = "";

    if (state.error) {
      var msg = el("p", "comment error", t("projects.error") + " ");
      var a = el("a", null, t("projects.errorLink"));
      a.href = "https://github.com/" + SITE.githubUser + "?tab=repositories";
      msg.appendChild(a);
      grid.appendChild(msg);
      return;
    }
    if (!state.repos) {
      grid.appendChild(el("p", "comment", t("projects.loading")));
      return;
    }

    var repos = visibleRepos();
    renderFilters(repos);
    var shown = repos.filter(function (r) { return state.filter === "all" || r.language === state.filter; });
    if (!shown.length) {
      grid.appendChild(el("p", "comment", t("projects.empty")));
      return;
    }
    shown.forEach(function (r, i) { grid.appendChild(projectCard(r, i)); });
  }

  /* ---------- render all ---------- */

  function render() {
    applyStaticText();
    renderLog("experience-list", SITE.experience);
    renderLog("education-list", SITE.education);
    renderSkills();
    renderProjects();
  }

  document.getElementById("lang-toggle").addEventListener("click", function () {
    state.lang = state.lang === "en" ? "fr" : "en";
    safeSet("portfolio-lang", state.lang);
    render();
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  render();
  typeCommand();
  loadRepos();
})();
