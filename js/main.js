const ISO_NUM_TO_A3 = {
  4: "AFG",
  8: "ALB",
  12: "DZA",
  24: "AGO",
  32: "ARG",
  36: "AUS",
  40: "AUT",
  50: "BGD",
  56: "BEL",
  64: "BTN",
  68: "BOL",
  76: "BRA",
  100: "BGR",
  104: "MMR",
  116: "KHM",
  120: "CMR",
  124: "CAN",
  140: "CAF",
  144: "LKA",
  152: "CHL",
  156: "CHN",
  170: "COL",
  178: "COG",
  180: "COD",
  188: "CRI",
  191: "HRV",
  192: "CUB",
  196: "CYP",
  203: "CZE",
  208: "DNK",
  214: "DOM",
  218: "ECU",
  818: "EGY",
  222: "SLV",
  231: "ETH",
  246: "FIN",
  250: "FRA",
  266: "GAB",
  276: "DEU",
  288: "GHA",
  300: "GRC",
  320: "GTM",
  324: "GIN",
  332: "HTI",
  340: "HND",
  348: "HUN",
  356: "IND",
  360: "IDN",
  364: "IRN",
  368: "IRQ",
  372: "IRL",
  376: "ISR",
  380: "ITA",
  388: "JAM",
  392: "JPN",
  400: "JOR",
  398: "KAZ",
  404: "KEN",
  116: "KHM",
  408: "PRK",
  410: "KOR",
  414: "KWT",
  418: "LAO",
  422: "LBN",
  430: "LBR",
  434: "LBY",
  440: "LTU",
  442: "LUX",
  450: "MDG",
  454: "MWI",
  458: "MYS",
  466: "MLI",
  484: "MEX",
  504: "MAR",
  508: "MOZ",
  516: "NAM",
  524: "NPL",
  528: "NLD",
  540: "NCL",
  554: "NZL",
  558: "NIC",
  562: "NER",
  566: "NGA",
  578: "NOR",
  586: "PAK",
  591: "PAN",
  598: "PNG",
  600: "PRY",
  604: "PER",
  608: "PHL",
  616: "POL",
  620: "PRT",
  630: "PRI",
  634: "QAT",
  642: "ROU",
  643: "RUS",
  646: "RWA",
  682: "SAU",
  686: "SEN",
  694: "SLE",
  706: "SOM",
  710: "ZAF",
  724: "ESP",
  144: "LKA",
  736: "SDN",
  752: "SWE",
  756: "CHE",
  760: "SYR",
  764: "THA",
  768: "TGO",
  780: "TTO",
  788: "TUN",
  792: "TUR",
  800: "UGA",
  804: "UKR",
  784: "ARE",
  826: "GBR",
  840: "USA",
  858: "URY",
  862: "VEN",
  704: "VNM",
  887: "YEM",
  894: "ZMB",
  716: "ZWE",
  728: "SSD",
  729: "SDN",
  12: "DZA",
  51: "ARM",
  31: "AZE",
  112: "BLR",
  70: "BIH",
  72: "BWA",
  86: "IOT",
  96: "BRN",
  108: "BDI",
  132: "CPV",
  136: "CYM",
  148: "TCD",
  174: "COM",
  175: "MYT",
  184: "COK",
  232: "ERI",
  233: "EST",
  238: "FLK",
  242: "FJI",
  260: "ATF",
  268: "GEO",
  270: "GMB",
  275: "PSE",
  292: "GIB",
  296: "KIR",
  398: "KAZ",
  417: "KGZ",
  426: "LSO",
  428: "LVA",
  434: "LBY",
  438: "LIE",
  446: "MAC",
  454: "MWI",
  470: "MLT",
  478: "MRT",
  480: "MUS",
  496: "MNG",
  498: "MDA",
  492: "MCO",
  504: "MAR",
  516: "NAM",
  520: "NRU",
  528: "NLD",
  548: "VUT",
  562: "NER",
  570: "NIU",
  574: "NFK",
  579: "MKD",
  580: "MNP",
  583: "FSM",
  584: "MHL",
  585: "PLW",
  598: "PNG",
  626: "TLS",
  646: "RWA",
  659: "KNA",
  662: "LCA",
  670: "VCT",
  674: "SMR",
  678: "STP",
  688: "SRB",
  690: "SYC",
  699: "SGP",
  702: "SGP",
  703: "SVK",
  705: "SVN",
  706: "SOM",
  710: "ZAF",
  716: "ZWE",
  724: "ESP",
  728: "SSD",
  740: "SUR",
  748: "SWZ",
  762: "TJK",
  776: "TON",
  780: "TTO",
  795: "TKM",
  798: "TUV",
  800: "UGA",
  807: "MKD",
  831: "GGY",
  832: "JEY",
  833: "IMN",
  44: "BHS",
  84: "BLZ",
  90: "SLB",
  158: "TWN",
  204: "BEN",
  226: "GNQ",
  262: "DJI",
  304: "GRL",
  328: "GUY",
  352: "ISL",
  384: "CIV",
  499: "MNE",
  512: "OMN",
  624: "GNB",
  732: "ESH",
  834: "TZA",
  854: "BFA",
  860: "UZB",
};

const COUNTRY_NAME_ZH = {
  ABW: "阿鲁巴",
  AFG: "阿富汗",
  AGO: "安哥拉",
  ALB: "阿尔巴尼亚",
  AND: "安道尔",
  ARE: "阿拉伯联合酋长国",
  ARG: "阿根廷",
  ARM: "亚美尼亚",
  ATG: "安提瓜和巴布达",
  AUS: "澳大利亚",
  AUT: "奥地利",
  AZE: "阿塞拜疆",
  BDI: "布隆迪",
  BEL: "比利时",
  BEN: "贝宁",
  BFA: "布基纳法索",
  BGD: "孟加拉国",
  BGR: "保加利亚",
  BHR: "巴林",
  BHS: "巴哈马",
  BIH: "波斯尼亚和黑塞哥维那",
  BLR: "白俄罗斯",
  BLZ: "伯利兹",
  BMU: "百慕大",
  BOL: "玻利维亚",
  BRA: "巴西",
  BRB: "巴巴多斯",
  BRN: "文莱",
  BTN: "不丹",
  BWA: "博茨瓦纳",
  CAF: "中非共和国",
  CAN: "加拿大",
  CHE: "瑞士",
  CHL: "智利",
  CHN: "中国",
  CIV: "科特迪瓦",
  CMR: "喀麦隆",
  COD: "刚果（金）",
  COG: "刚果（布）",
  COL: "哥伦比亚",
  COM: "科摩罗",
  CPV: "佛得角",
  CRI: "哥斯达黎加",
  CUB: "古巴",
  CUW: "库拉索",
  CYM: "开曼群岛",
  CYP: "塞浦路斯",
  CZE: "捷克",
  DEU: "德国",
  DMA: "多米尼克",
  DNK: "丹麦",
  DOM: "多米尼加共和国",
  DZA: "阿尔及利亚",
  ECU: "厄瓜多尔",
  EGY: "埃及",
  ERI: "厄立特里亚",
  ESP: "西班牙",
  EST: "爱沙尼亚",
  ETH: "埃塞俄比亚",
  FIN: "芬兰",
  FJI: "斐济",
  FRA: "法国",
  FSM: "密克罗尼西亚联邦",
  GAB: "加蓬",
  GBR: "英国",
  GEO: "格鲁吉亚",
  GHA: "加纳",
  GIB: "直布罗陀",
  GIN: "几内亚",
  GMB: "冈比亚",
  GNB: "几内亚比绍",
  GNQ: "赤道几内亚",
  GRC: "希腊",
  GRD: "格林纳达",
  GTM: "危地马拉",
  GUY: "圭亚那",
  HIC: "高收入经济体",
  HKG: "中国香港",
  HND: "洪都拉斯",
  HRV: "克罗地亚",
  HTI: "海地",
  HUN: "匈牙利",
  IDN: "印度尼西亚",
  IND: "印度",
  IRL: "爱尔兰",
  IRN: "伊朗",
  IRQ: "伊拉克",
  ISL: "冰岛",
  ISR: "以色列",
  ITA: "意大利",
  JAM: "牙买加",
  JOR: "约旦",
  JPN: "日本",
  KAZ: "哈萨克斯坦",
  KEN: "肯尼亚",
  KGZ: "吉尔吉斯斯坦",
  KHM: "柬埔寨",
  KIR: "基里巴斯",
  KNA: "圣基茨和尼维斯",
  KOR: "韩国",
  KWT: "科威特",
  LAO: "老挝",
  LBN: "黎巴嫩",
  LBR: "利比里亚",
  LBY: "利比亚",
  LCA: "圣卢西亚",
  LIC: "低收入经济体",
  LIE: "列支敦士登",
  LKA: "斯里兰卡",
  LMC: "中低收入经济体",
  LSO: "莱索托",
  LTU: "立陶宛",
  LUX: "卢森堡",
  LVA: "拉脱维亚",
  MAC: "中国澳门",
  MAR: "摩洛哥",
  MDA: "摩尔多瓦",
  MDG: "马达加斯加",
  MDV: "马尔代夫",
  MEX: "墨西哥",
  MHL: "马绍尔群岛",
  MIC: "中等收入经济体",
  MKD: "北马其顿",
  MLI: "马里",
  MLT: "马耳他",
  MMR: "缅甸",
  MNE: "黑山",
  MNG: "蒙古",
  MOZ: "莫桑比克",
  MRT: "毛里塔尼亚",
  MUS: "毛里求斯",
  MWI: "马拉维",
  MYS: "马来西亚",
  NAM: "纳米比亚",
  NCL: "新喀里多尼亚",
  NER: "尼日尔",
  NGA: "尼日利亚",
  NIC: "尼加拉瓜",
  NLD: "荷兰",
  NOR: "挪威",
  NPL: "尼泊尔",
  NRU: "瑙鲁",
  NZL: "新西兰",
  OMN: "阿曼",
  PAK: "巴基斯坦",
  PAN: "巴拿马",
  PER: "秘鲁",
  PHL: "菲律宾",
  PLW: "帕劳",
  PNG: "巴布亚新几内亚",
  POL: "波兰",
  PRI: "波多黎各",
  PRK: "朝鲜",
  PRT: "葡萄牙",
  PRY: "巴拉圭",
  PSE: "巴勒斯坦",
  PYF: "法属波利尼西亚",
  QAT: "卡塔尔",
  ROU: "罗马尼亚",
  RUS: "俄罗斯",
  RWA: "卢旺达",
  SAU: "沙特阿拉伯",
  SDN: "苏丹",
  SEN: "塞内加尔",
  SGP: "新加坡",
  SLB: "所罗门群岛",
  SLE: "塞拉利昂",
  SLV: "萨尔瓦多",
  SMR: "圣马力诺",
  SOM: "索马里",
  SRB: "塞尔维亚",
  SSD: "南苏丹",
  STP: "圣多美和普林西比",
  SUR: "苏里南",
  SVK: "斯洛伐克",
  SVN: "斯洛文尼亚",
  SWE: "瑞典",
  SWZ: "斯威士兰",
  SXM: "荷属圣马丁",
  SYC: "塞舌尔",
  SYR: "叙利亚",
  TCA: "特克斯和凯科斯群岛",
  TCD: "乍得",
  TGO: "多哥",
  THA: "泰国",
  TJK: "塔吉克斯坦",
  TKM: "土库曼斯坦",
  TLS: "东帝汶",
  TON: "汤加",
  TTO: "特立尼达和多巴哥",
  TUN: "突尼斯",
  TUR: "土耳其",
  TUV: "图瓦卢",
  TZA: "坦桑尼亚",
  UGA: "乌干达",
  UKR: "乌克兰",
  UMC: "中高收入经济体",
  URY: "乌拉圭",
  USA: "美国",
  UZB: "乌兹别克斯坦",
  VCT: "圣文森特和格林纳丁斯",
  VEN: "委内瑞拉",
  VGB: "英属维尔京群岛",
  VIR: "美属维京群岛",
  VNM: "越南",
  VUT: "瓦努阿图",
  WSM: "萨摩亚",
  YEM: "也门",
  ZAF: "南非",
  ZMB: "赞比亚",
  ZWE: "津巴布韦",
  ASM: "美属萨摩亚",
  DJI: "吉布提",
  MCO: "摩纳哥",
  AFE: "东部和南部非洲",
  AFW: "西部和中部非洲",
  ARB: "阿拉伯国家",
  CEB: "中欧和波罗的海国家",
  CSS: "加勒比小岛国",
  EAP: "东亚与太平洋 (不含高收入)",
  EAR: "人口红利早期",
  EAS: "东亚与太平洋",
  ECA: "欧洲与中亚 (不含高收入)",
  ECS: "欧洲与中亚",
  EMU: "欧元区",
  EUU: "欧盟",
  FCS: "脆弱和冲突影响国家",
  HPC: "债务负担沉重贫困国家",
  IBD: "IBRD 成员",
  IBT: "IDA 与 IBRD 总计",
  IDA: "IDA 总计",
  IDB: "IDA 混合贷款",
  IDX: "仅 IDA",
  LAC: "拉丁美洲和加勒比 (不含高收入)",
  LCN: "拉丁美洲和加勒比",
  LDC: "最不发达国家",
  LMY: "中低收入国家",
  LTE: "人口红利后期",
  MEA: "中东、北非、阿富汗和巴基斯坦",
  NAC: "北美",
  OED: "经合组织成员",
  OSS: "其他小岛国",
  PRE: "人口红利前期",
  PSS: "太平洋岛国小国",
  PST: "人口红利后期",
  SAS: "南亚",
  SSA: "次撒哈拉非洲 (不含高收入)",
  SSF: "次撒哈拉非洲",
  SST: "小型国家",
  TEA: "东亚与太平洋 (IDA 与 IBRD)",
  TEC: "欧洲与中亚 (IDA 与 IBRD)",
  TLA: "拉丁美洲和加勒比 (IDA 与 IBRD)",
  TSA: "南亚 (IDA 与 IBRD)",
  TSS: "次撒哈拉非洲 (IDA 与 IBRD)",
  WLD: "世界",
};
function getCountryName(code, fallback) {
  return COUNTRY_NAME_ZH[code] || fallback || code;
}

function formatRate(v) {
  if (v == null || isNaN(v)) return "—";
  return v < 1 ? v.toFixed(2) : v.toFixed(1);
}

const tooltip = d3.select("#global-tooltip");

const VIS = {
  axis: "#6b7c8d",
  grid: "#e8eef4",
  mapMissing: "#d7dee7",
  mapStroke: "#ffffff",
  expendScale: d3.interpolateBlues,
  riskScale: d3.interpolateBlues,
  qualityScale: d3.interpolateRdYlGn,
  teacher: {
    preprimary: "#bfdbfe",
    primary: "#3b82f6",
    secondary: "#1e3a8a",
  },
};

function positionTooltip(ev) {
  const node = tooltip.node();
  if (!node) return;
  const pad = 14;
  const box = node.getBoundingClientRect();
  const x = Math.min(ev.clientX + 16, window.innerWidth - box.width - pad);
  const y = Math.min(ev.clientY - 10, window.innerHeight - box.height - pad);
  tooltip.style("left", Math.max(pad, x) + "px").style("top", Math.max(pad, y) + "px");
}

function showTooltip(ev, html) {
  tooltip
    .interrupt()
    .html(html)
    .style("opacity", "1");
  positionTooltip(ev);
}

function moveTooltip(ev) {
  positionTooltip(ev);
}

function hideTooltip() {
  tooltip.style("opacity", "0");
}

function styleAxis(selection) {
  selection.selectAll("text").style("font-size", "10px").style("fill", VIS.axis);
  selection.selectAll("path,line").style("stroke", "#dbe5ed");
}

function addXYGrid(g, xScale, yScale, width, height, xTicks = 5, yTicks = 5) {
  g.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale).ticks(xTicks).tickSize(-height).tickFormat(""))
    .call((axis) => axis.select(".domain").remove())
    .selectAll("line")
    .attr("class", "grid-line")
    .attr("stroke", VIS.grid);

  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(yScale).ticks(yTicks).tickSize(-width).tickFormat(""))
    .call((axis) => axis.select(".domain").remove())
    .selectAll("line")
    .attr("class", "grid-line")
    .attr("stroke", VIS.grid);
}

function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );
  fadeElements.forEach((el) => observer.observe(el));
}

function initProgressBar() {
  const progressBar = document.getElementById("progressBar");
  window.addEventListener("scroll", () => {
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.height = scrolled + "%";
  });
}

function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = Array.from(navLinks)
    .map((link) => {
      const targetId = link.getAttribute("href").substring(1);
      return document.getElementById(targetId);
    })
    .filter(Boolean);

  // 点击事件
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // 滚动监听，高亮当前部分
  function updateActiveNav() {
    let current = "";
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // 初始化和滚动时更新
  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();
}

function initSidebarToggle() {
  const toggle = document.getElementById("sidebarToggle");
  if (!toggle) return;

  const icon = toggle.querySelector(".sidebar-toggle-icon");

  function setCollapsed(collapsed, persist = true) {
    document.body.classList.toggle("sidebar-collapsed", collapsed);
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.setAttribute("aria-label", collapsed ? "展开目录" : "折叠目录");
    toggle.setAttribute("title", collapsed ? "展开目录" : "折叠目录");
    if (icon) icon.textContent = "‹";
    if (persist) localStorage.setItem("educationSidebarCollapsed", collapsed ? "true" : "false");
    if (persist) scheduleTopic1LayoutRefresh();
  }

  setCollapsed(localStorage.getItem("educationSidebarCollapsed") === "true", false);
  toggle.addEventListener("click", () => {
    setCollapsed(!document.body.classList.contains("sidebar-collapsed"));
  });
}

// ==================== 话题一：投入与师资 ====================
const Topic1Store = {
  expendMap: new Map(),
  primaryMap: new Map(),
  preprimaryMap: new Map(),
  secondaryMap: new Map(),
  regionMap: new Map(),
  allCountries: [],
  scatterLevel: "primary",
  selectedContinent: null,
  teacherBubbleContinent: null,
};

const Topic1ContinentColors = {
  亚洲: "#2563eb",
  欧洲: "#0ea5e9",
  非洲: "#ef4444",
  美洲: "#10b981",
  大洋洲: "#f59e0b",
  欧亚: "#8b5cf6",
  其他: "#94a3b8",
};

const Topic1RegionToContinent = {
  东亚: "亚洲",
  东南亚: "亚洲",
  南亚: "亚洲",
  中亚: "亚洲",
  西亚: "亚洲",
  中东: "亚洲",
  欧洲: "欧洲",
  欧亚: "欧亚",
  非洲: "非洲",
  美洲: "美洲",
  大洋洲: "大洋洲",
};

const Topic1CountryContinentOverrides = {
  ABW: "美洲",
  AGO: "非洲",
  AND: "欧洲",
  ATG: "美洲",
  BHS: "美洲",
  BLR: "欧洲",
  BMU: "美洲",
  BOL: "美洲",
  BRB: "美洲",
  BRN: "亚洲",
  BTN: "亚洲",
  CAF: "非洲",
  CPV: "非洲",
  CUB: "美洲",
  CYM: "美洲",
  DJI: "非洲",
  DMA: "美洲",
  ERI: "非洲",
  FJI: "大洋洲",
  FSM: "大洋洲",
  GMB: "非洲",
  GNB: "非洲",
  GNQ: "非洲",
  GRD: "美洲",
  GUY: "美洲",
  KIR: "大洋洲",
  KNA: "美洲",
  LBN: "亚洲",
  LBR: "非洲",
  LCA: "美洲",
  MCO: "欧洲",
  MDV: "亚洲",
  MHL: "大洋洲",
  MOZ: "非洲",
  MWI: "非洲",
  NRU: "大洋洲",
  PLW: "大洋洲",
  PNG: "大洋洲",
  PRI: "美洲",
  PSE: "亚洲",
  RWA: "非洲",
  SDN: "非洲",
  SLB: "大洋洲",
  SLE: "非洲",
  SMR: "欧洲",
  SSD: "非洲",
  STP: "非洲",
  SUR: "美洲",
  SWZ: "非洲",
  SYC: "非洲",
  SYR: "亚洲",
  TCA: "美洲",
  TJK: "亚洲",
  TKM: "亚洲",
  TON: "大洋洲",
  TUV: "大洋洲",
  TZA: "非洲",
  VCT: "美洲",
  VEN: "美洲",
  VGB: "美洲",
  VUT: "大洋洲",
  WSM: "大洋洲",
  ZWE: "非洲",
};

const Topic1InvalidCountryCodes = new Set([
  "AFE",
  "AFW",
  "ARB",
  "CEB",
  "CSS",
  "EAP",
  "EAR",
  "EAS",
  "ECA",
  "ECS",
  "EMU",
  "EUU",
  "FCS",
  "HIC",
  "HPC",
  "IBD",
  "IBT",
  "IDA",
  "IDB",
  "IDX",
  "LAC",
  "LCN",
  "LDC",
  "LIC",
  "LMC",
  "LMY",
  "LTE",
  "MEA",
  "MIC",
  "NAC",
  "OED",
  "OSS",
  "PRE",
  "PSS",
  "PST",
  "SAS",
  "SSA",
  "SSF",
  "SST",
  "TEA",
  "TEC",
  "TLA",
  "TSA",
  "TSS",
  "UMC",
  "WLD",
]);

function isValidTopic1CountryCode(code) {
  return code && !Topic1InvalidCountryCodes.has(code);
}

function parseCSV(csvData, valKey) {
  const map = new Map();
  if (!csvData || csvData.length === 0) return map;
  csvData.forEach((row) => {
    const code = (row.country_code || "").trim().toUpperCase();
    if (!code) return;
    const val = parseFloat(row.value);
    const year = parseInt(row.year);
    if (isNaN(val)) return;
    map.set(code, {
      code,
      name: getCountryName(code, row.country_name || code),
      value: val,
      year: isNaN(year) ? null : year,
    });
  });
  return map;
}

function parseTopic1RegionMap(regionData) {
  const map = new Map();
  if (!regionData || regionData.length === 0) return map;
  regionData.forEach((row) => {
    const code = (row.country_code || "").trim().toUpperCase();
    const region = (row.region || "").trim();
    if (!code || !region) return;
    map.set(code, {
      region,
      continent: Topic1RegionToContinent[region] || "其他",
    });
  });
  return map;
}

function getTopic1ContinentMeta(code) {
  const mapped = Topic1Store.regionMap.get(code);
  const override = Topic1CountryContinentOverrides[code];
  if (override) {
    return {
      region: mapped ? mapped.region : override,
      continent: override,
    };
  }
  return mapped || { region: "其他", continent: "其他" };
}

async function loadTopic1Data() {
  try {
    const [expendCSV, primCSV, preCSV, secCSV, regionCSV, worldTopo] = await Promise.all([
      d3.csv("./data/edu_expenditure_latest.csv"),
      d3.csv("./data/trained_primary_latest.csv"),
      d3.csv("./data/trained_preprimary_latest.csv"),
      d3.csv("./data/trained_secondary_latest.csv"),
      d3.csv("./data/region_mapping.csv"),
      d3.json("./data/countries-110m.json"),
    ]);

    Topic1Store.expendMap = parseCSV(expendCSV);
    Topic1Store.primaryMap = parseCSV(primCSV);
    Topic1Store.preprimaryMap = parseCSV(preCSV);
    Topic1Store.secondaryMap = parseCSV(secCSV);
    Topic1Store.regionMap = parseTopic1RegionMap(regionCSV);

    const allCodes = new Set([
      ...Topic1Store.expendMap.keys(),
      ...Topic1Store.primaryMap.keys(),
      ...Topic1Store.preprimaryMap.keys(),
      ...Topic1Store.secondaryMap.keys(),
    ]);
    Topic1Store.allCountries = [];
    allCodes.forEach((code) => {
      if (!isValidTopic1CountryCode(code)) return;
      const regionMeta = getTopic1ContinentMeta(code);
      Topic1Store.allCountries.push({
        code,
        name: getCountryName(code),
        expend: Topic1Store.expendMap.get(code) || null,
        primary: Topic1Store.primaryMap.get(code) || null,
        preprimary: Topic1Store.preprimaryMap.get(code) || null,
        secondary: Topic1Store.secondaryMap.get(code) || null,
        region: regionMeta.region,
        continent: regionMeta.continent,
      });
    });

    return {
      geoFeatures: topojson.feature(worldTopo, worldTopo.objects.countries)
        .features,
    };
  } catch (err) {
    console.error("❌ 话题一数据加载失败:", err);
    return { geoFeatures: null };
  }
}

function renderTopic1MapChart(geoFeatures) {
  const mapId = "#topic1-vis-map";
  const rankId = "#topic1-vis-ranking";
  const mapContainer = d3.select(mapId);
  const rankContainer = d3.select(rankId);

  mapContainer.html("");
  rankContainer.html("");

  const mapNode = mapContainer.node();
  const rankNode = rankContainer.node();
  const mapW = Math.max(mapNode.getBoundingClientRect().width, 300);
  const mapH = Math.max(mapNode.getBoundingClientRect().height, 420);
  const rankW = Math.max(rankNode.getBoundingClientRect().width, 200);
  const rankH = Math.max(rankNode.getBoundingClientRect().height, 420);

  const mapSvg = mapContainer
    .append("svg")
    .attr("width", mapW)
    .attr("height", mapH);
  const fc = { type: "FeatureCollection", features: geoFeatures };
  const proj = d3.geoEqualEarth().fitSize([mapW, mapH - 10], fc);
  const path = d3.geoPath().projection(proj);

  mapSvg
    .append("rect")
    .attr("width", mapW)
    .attr("height", mapH)
    .attr("fill", "#dbeafe");
  const mapG = mapSvg.append("g");
  const center = { x: mapW / 2, y: mapH / 2 };
  const pan = { x: 0, y: 0 };
  let scale = 1;

  function clampPan() {
    const mx = Math.max(0, ((scale - 1) * mapW) / 2);
    const my = Math.max(0, ((scale - 1) * mapH) / 2);
    pan.x = Math.max(-mx, Math.min(mx, pan.x));
    pan.y = Math.max(-my, Math.min(my, pan.y));
  }

  function applyTransform() {
    clampPan();
    mapG.attr(
      "transform",
      `translate(${center.x + pan.x},${center.y + pan.y}) scale(${scale}) translate(${-center.x},${-center.y})`,
    );
  }

  mapSvg.style("cursor", "grab").call(
    d3
      .drag()
      .on("start", () => d3.select(mapSvg.node()).style("cursor", "grabbing"))
      .on("drag", (ev) => {
        if (scale > 1.01) {
          pan.x += ev.dx;
          pan.y += ev.dy;
          applyTransform();
        }
      })
      .on("end", () => d3.select(mapSvg.node()).style("cursor", "grab")),
  );

  mapSvg.on("wheel", function (ev) {
    ev.preventDefault();
    const delta = ev.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(1, Math.min(4, scale * delta));
    const mouseX = ev.offsetX;
    const mouseY = ev.offsetY;
    pan.x = mouseX - center.x - (mouseX - center.x) * (newScale / scale);
    pan.y = mouseY - center.y - (mouseY - center.y) * (newScale / scale);
    scale = newScale;
    applyTransform();
  });

  const legendDiv = mapContainer.append("div").attr("class", "map-legend");
  legendDiv
    .append("div")
    .style("font-size", "11px")
    .style("color", "#475569")
    .style("margin-bottom", "4px")
    .text("教育支出占 GDP (%)");
  const gId = "lg-" + Math.random().toString(36).slice(2, 7);
  const lSvg = legendDiv.append("svg").attr("width", 140).attr("height", 22);
  const defs = lSvg.append("defs");
  const grad = defs
    .append("linearGradient")
    .attr("id", gId)
    .attr("x1", "0%")
    .attr("x2", "100%");
  grad.append("stop").attr("offset", "0%").attr("stop-color", "#eff6ff");
  grad.append("stop").attr("offset", "50%").attr("stop-color", "#3b82f6");
  grad.append("stop").attr("offset", "100%").attr("stop-color", "#1e3a5f");
  lSvg
    .append("rect")
    .attr("width", 140)
    .attr("height", 12)
    .attr("fill", `url(#${gId})`)
    .attr("rx", 4);
  legendDiv
    .append("div")
    .attr("class", "legend-labels")
    .html("<span>低</span><span>中</span><span>高</span>");

  const mRank = { top: 56, right: 20, bottom: 30, left: 90 };
  const iW = rankW - mRank.left - mRank.right;
  const sH = Math.max(rankH - mRank.top - mRank.bottom, 260);
  const rankSvg = rankContainer
    .append("svg")
    .attr("width", rankW)
    .attr("height", rankH);
  let rankMode = "high";

  const rankG = rankSvg
    .append("g")
    .attr("transform", `translate(${mRank.left},${mRank.top})`);
  const rankTitle = rankG
    .append("text")
    .attr("x", rankW / 2 - mRank.left)
    .attr("y", -12)
    .attr("text-anchor", "middle")
    .style("font-size", "13px")
    .style("font-weight", "600")
    .style("fill", "#1e293b");

  const xRScale = d3.scaleLinear().range([0, iW]);
  const yRScale = d3.scaleBand().range([0, sH]).padding(0.22);
  const xRAxis = rankG.append("g").attr("transform", `translate(0,${sH})`);
  const yRAxis = rankG.append("g");

  function getCountryCode(d) {
    return ISO_NUM_TO_A3[+d.id] || null;
  }

  const mapPaths = mapG
    .selectAll("path")
    .data(geoFeatures)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "#fff")
    .attr("stroke-width", 0.4)
    .attr("fill", "#cbd5e1");

  function updateMap() {
    const allVals = Array.from(Topic1Store.expendMap.values())
      .map((d) => d.value)
      .filter((v) => v != null);
    const maxVal = d3.max(allVals) || 16;
    const colorFn = d3.scaleSequential(VIS.expendScale).domain([0, maxVal]);
    const t = d3.transition().duration(700);

    mapPaths
      .on("mouseover", function (ev, d) {
        const code = getCountryCode(d);
        const data = code ? Topic1Store.expendMap.get(code) : null;
        if (!data) return;
        d3.select(this).attr("stroke", "#102033").attr("stroke-width", 1.5);
        showTooltip(
          ev,
          `<div style="font-weight:600;margin-bottom:4px">${data.name}</div><div>教育支出：<span style="color:#60a5fa;font-weight:bold">${formatRate(data.value)}%</span></div>`,
        );
      })
      .on("mousemove", moveTooltip)
      .on("mouseout", function () {
        d3.select(this).attr("stroke", "#fff").attr("stroke-width", 0.4);
        hideTooltip();
      })
      .transition(t)
      .attr("fill", (d) => {
        const code = getCountryCode(d);
        const data = code ? Topic1Store.expendMap.get(code) : null;
        return data && data.value != null ? colorFn(data.value) : VIS.mapMissing;
      });
  }

  function updateRank() {
    const ranked = Array.from(Topic1Store.expendMap.values()).filter(
      (d) => d.value != null,
    );
    const sorted =
      rankMode === "high"
        ? ranked
            .slice()
            .sort((a, b) => b.value - a.value)
            .slice(0, 10)
        : ranked
            .slice()
            .sort((a, b) => a.value - b.value)
            .slice(0, 10);

    rankTitle.text(
      rankMode === "high"
        ? "教育支出最高的 10 个国家（或地区）"
        : "教育支出最低的 10 个国家（或地区）",
    );
    const mx = d3.max(sorted, (d) => d.value) || 1;
    xRScale.domain([0, mx * 1.15]).nice();
    yRScale.domain(sorted.map((d) => d.name));
    const t = d3.transition().duration(600);

    xRAxis
      .transition(t)
      .call(
        d3
          .axisBottom(xRScale)
          .ticks(3)
          .tickFormat((d) => d + "%"),
      )
      .selectAll("text")
      .style("font-size", "10px")
      .style("fill", "#64748b");
    yRAxis
      .transition(t)
      .call(d3.axisLeft(yRScale))
      .selectAll("text")
      .style("font-size", "10px")
      .style("fill", "#334155");

    const expMax =
      d3.max(
        Array.from(Topic1Store.expendMap.values())
          .map((d) => d.value)
          .filter((v) => v != null),
      ) || 16;
    function fillFn(d) {
      return VIS.expendScale(Math.max(0.2, d.value / expMax));
    }

    function highlightRankBar(target) {
      const activeH = Math.min(yRScale.bandwidth() + 4, yRScale.step() - 2);
      rankG
        .selectAll(".bar-r")
        .interrupt("rank-hover")
        .transition("rank-hover")
        .duration(140)
        .attr("y", (d) => yRScale(d.name) + (yRScale.bandwidth() - (d.code === target.code ? activeH : yRScale.bandwidth())) / 2)
        .attr("height", (d) => (d.code === target.code ? activeH : yRScale.bandwidth()))
        .attr("fill", (d) => (d.code === target.code ? "#1d4ed8" : fillFn(d)))
        .attr("stroke", (d) => (d.code === target.code ? "#0f172a" : "none"))
        .attr("stroke-width", (d) => (d.code === target.code ? 1.4 : 0))
        .style("opacity", (d) => (d.code === target.code ? 1 : 0.28));

      rankG
        .selectAll(".lab-r")
        .interrupt("rank-hover")
        .transition("rank-hover")
        .duration(140)
        .style("font-size", (d) => (d.code === target.code ? "10px" : "9px"))
        .style("font-weight", (d) => (d.code === target.code ? "800" : "600"))
        .style("fill", (d) => (d.code === target.code ? "#0f172a" : "#64748b"))
        .style("opacity", (d) => (d.code === target.code ? 1 : 0.45));
    }

    function resetRankHighlight() {
      rankG
        .selectAll(".bar-r")
        .interrupt("rank-hover")
        .transition("rank-hover")
        .duration(160)
        .attr("y", (d) => yRScale(d.name))
        .attr("height", yRScale.bandwidth())
        .attr("fill", fillFn)
        .attr("stroke", "none")
        .attr("stroke-width", 0)
        .style("opacity", 1);

      rankG
        .selectAll(".lab-r")
        .interrupt("rank-hover")
        .transition("rank-hover")
        .duration(160)
        .style("font-size", "9px")
        .style("font-weight", "600")
        .style("fill", "#102033")
        .style("opacity", 1);
    }

    const bars = rankG.selectAll(".bar-r").data(sorted, (d) => d.code);
    bars.exit().transition(t).attr("width", 0).style("opacity", 0).remove();
    const mergedBars = bars
      .enter()
      .append("rect")
      .attr("class", "bar-r")
      .attr("rx", 5)
      .attr("y", (d) => yRScale(d.name))
      .attr("height", yRScale.bandwidth())
      .attr("x", 0)
      .attr("width", 0)
      .attr("fill", fillFn)
      .merge(bars);

    mergedBars
      .on("mouseover", function (ev, d) {
        highlightRankBar(d);
        showTooltip(
          ev,
          `<b>${d.name}</b><br>教育支出：${formatRate(d.value)}%`,
        );
      })
      .on("mousemove", moveTooltip)
      .on("mouseout", function () {
        resetRankHighlight();
        hideTooltip();
      })
      .transition(t)
      .attr("y", (d) => yRScale(d.name))
      .attr("height", yRScale.bandwidth())
      .attr("width", (d) => xRScale(d.value))
      .attr("fill", fillFn);

    const labels = rankG.selectAll(".lab-r").data(sorted, (d) => d.code);
    labels.exit().remove();
    labels
      .enter()
      .append("text")
      .attr("class", "lab-r")
      .attr("y", (d) => yRScale(d.name) + yRScale.bandwidth() / 2 + 3)
      .attr("x", 4)
      .style("font-size", "9px")
      .style("fill", "#102033")
      .merge(labels)
      .transition(t)
      .attr("y", (d) => yRScale(d.name) + yRScale.bandwidth() / 2 + 3)
      .attr("x", (d) => xRScale(d.value) + 4)
      .text((d) => formatRate(d.value) + "%");
  }

  updateMap();
  updateRank();

  d3.selectAll("#topic1-rank-toggle .control-btn").on("click", function () {
    rankMode = d3.select(this).attr("data-mode");
    d3.selectAll("#topic1-rank-toggle .control-btn").classed("active", false);
    d3.select(this).classed("active", true);
    updateRank();
  });
}

function renderTopic1ScatterChart() {
  const cId = "#topic1-vis-scatter";
  const container = d3.select(cId);
  container.html("");

  const node = container.node();
  const width = Math.max(node.getBoundingClientRect().width, 600);
  const height = Math.max(node.getBoundingClientRect().height, 400);

  const margin = { top: 72, right: 30, bottom: 60, left: 70 };
  const iw = width - margin.left - margin.right;
  const ih = height - margin.top - margin.bottom;

  const svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("display", "block");
  const chartArea = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  let currentLevel = Topic1Store.scatterLevel || "primary";
  const levelLabel = {
    primary: "小学受训教师 (%)",
    preprimary: "学前受训教师 (%)",
    secondary: "中学受训教师 (%)",
  };
  const levelLabelShort = {
    primary: "小学",
    preprimary: "学前",
    secondary: "中学",
  };

  const medVLine = chartArea
    .append("line")
    .attr("stroke", "#cbd5e1")
    .attr("stroke-dasharray", "6,3")
    .attr("stroke-width", 1);
  const medHLine = chartArea
    .append("line")
    .attr("stroke", "#cbd5e1")
    .attr("stroke-dasharray", "6,3")
    .attr("stroke-width", 1);

  const xScale = d3.scaleLinear().range([0, iw]);
  const yScale = d3.scaleLinear().range([ih, 0]);
  const xGrid = chartArea.append("g").attr("class", "grid").attr("transform", `translate(0,${ih})`);
  const yGrid = chartArea.append("g").attr("class", "grid");
  const xAxis = chartArea.append("g").attr("transform", `translate(0,${ih})`);
  const yAxis = chartArea.append("g");
  const legendG = chartArea
    .append("g")
    .attr("class", "topic1-continent-legend")
    .attr("transform", "translate(0,-48)");

  const xLabel = chartArea
    .append("text")
    .attr("x", iw / 2)
    .attr("y", ih + 40)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "#475569")
    .text("教育支出占 GDP (%)");
  const yLabel = chartArea
    .append("text")
    .attr("x", -ih / 2)
    .attr("y", -48)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .style("font-size", "12px")
    .style("fill", "#475569");

  function getScatterData(level) {
    return Topic1Store.allCountries
      .filter(
        (d) =>
          isValidTopic1CountryCode(d.code) &&
          d.expend &&
          d[level] &&
          d.expend.value > 0 &&
          d[level].value > 0,
      )
      .map((d) => ({
        code: d.code,
        name: d.name,
        x: d.expend.value,
        y: d[level].value,
        region: d.region || "其他",
        continent: d.continent || "其他",
      }));
  }

  function getActiveContinent(previewContinent = null) {
    return previewContinent || Topic1Store.selectedContinent;
  }

  function applyLegendState(activeContinent, duration = 140) {
    chartArea
      .selectAll(".scatter-dot")
      .interrupt("continent-hover")
      .transition("continent-hover")
      .duration(duration)
      .attr("r", (d) => (!activeContinent ? 5 : d.continent === activeContinent ? 7 : 4))
      .attr("opacity", (d) => (!activeContinent ? 0.74 : d.continent === activeContinent ? 1 : 0.16))
      .attr("stroke", (d) => (activeContinent && d.continent === activeContinent ? "#0f172a" : "#fff"))
      .attr("stroke-width", (d) => (activeContinent && d.continent === activeContinent ? 1.8 : 1));

    legendG
      .selectAll(".legend-item")
      .interrupt("continent-hover")
      .transition("continent-hover")
      .duration(duration)
      .attr("opacity", (d) => (!activeContinent ? 1 : d === activeContinent ? 1 : 0.34));

    legendG
      .selectAll(".legend-dot")
      .interrupt("continent-hover")
      .transition("continent-hover")
      .duration(duration)
      .attr("r", (d) => (d === Topic1Store.selectedContinent ? 6.5 : 5))
      .attr("stroke", (d) => (d === Topic1Store.selectedContinent ? "#0f172a" : "#fff"))
      .attr("stroke-width", (d) => (d === Topic1Store.selectedContinent ? 2 : 1.5));

    legendG
      .selectAll(".legend-label")
      .interrupt("continent-hover")
      .transition("continent-hover")
      .duration(duration)
      .style("font-weight", (d) => (d === Topic1Store.selectedContinent ? "800" : "650"))
      .style("fill", (d) => (d === Topic1Store.selectedContinent ? "#0f172a" : "#475569"));
  }

  function highlightContinent(continent) {
    applyLegendState(getActiveContinent(continent));
  }

  function resetContinentHighlight() {
    applyLegendState(Topic1Store.selectedContinent, 160);
  }

  function renderContinentLegend(data) {
    const ordered = Object.keys(Topic1ContinentColors).filter((continent) =>
      data.some((d) => d.continent === continent),
    );
    legendG.selectAll("*").remove();

    legendG
      .append("text")
      .attr("x", 0)
      .attr("y", 7)
      .style("font-size", "11px")
      .style("font-weight", "700")
      .style("fill", "#475569")
      .text("大洲：");

    let xOffset = 44;
    const legendItem = legendG
      .selectAll(".legend-item")
      .data(ordered)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .style("cursor", "pointer")
      .attr("transform", (d, i) => {
        const x = xOffset;
        xOffset += Math.max(64, d.length * 14 + 36);
        return `translate(${x},0)`;
      })
      .on("mouseover", function (ev, continent) {
        hideTooltip();
        highlightContinent(continent);
      })
      .on("mouseout", function () {
        resetContinentHighlight();
      })
      .on("click", function (ev, continent) {
        ev.stopPropagation();
        Topic1Store.selectedContinent =
          Topic1Store.selectedContinent === continent ? null : continent;
        applyLegendState(Topic1Store.selectedContinent, 120);
      });

    legendItem
      .append("circle")
      .attr("class", "legend-dot")
      .attr("cx", 6)
      .attr("cy", 4)
      .attr("r", 5)
      .attr("fill", (d) => Topic1ContinentColors[d])
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);

    legendItem
      .append("text")
      .attr("class", "legend-label")
      .attr("x", 16)
      .attr("y", 8)
      .style("font-size", "11px")
      .style("font-weight", "650")
      .style("fill", "#475569")
      .text((d) => d);
  }

  function drawScatter(level) {
    const data = getScatterData(level);
    if (data.length === 0) return;
    if (
      Topic1Store.selectedContinent &&
      !data.some((d) => d.continent === Topic1Store.selectedContinent)
    ) {
      Topic1Store.selectedContinent = null;
    }
    renderContinentLegend(data);

    const t = d3.transition().duration(700);
    const xMax = d3.max(data, (d) => d.x) * 1.15 || 15;
    xScale.domain([0, xMax]);
    yScale.domain([0, 105]);

    const medX = d3.median(data, (d) => d.x);
    const medY = d3.median(data, (d) => d.y);

    xGrid
      .transition(t)
      .call(d3.axisBottom(xScale).ticks(5).tickSize(-ih).tickFormat(""))
      .call((ag) => ag.select(".domain").remove())
      .selectAll("line")
      .attr("stroke", VIS.grid)
      .attr("stroke-width", 1);
    yGrid
      .transition(t)
      .call(d3.axisLeft(yScale).ticks(5).tickSize(-iw).tickFormat(""))
      .call((ag) => ag.select(".domain").remove())
      .selectAll("line")
      .attr("stroke", VIS.grid)
      .attr("stroke-width", 1);

    xAxis
      .transition(t)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(5)
          .tickFormat((d) => d + "%"),
      )
      .call(styleAxis);
    yAxis
      .transition(t)
      .call(
        d3
          .axisLeft(yScale)
          .ticks(5)
          .tickFormat((d) => d + "%"),
      )
      .call(styleAxis);

    medVLine
      .transition(t)
      .attr("x1", xScale(medX))
      .attr("x2", xScale(medX))
      .attr("y1", 0)
      .attr("y2", ih);
    medHLine
      .transition(t)
      .attr("x1", 0)
      .attr("x2", iw)
      .attr("y1", yScale(medY))
      .attr("y2", yScale(medY));
    yLabel.text(levelLabel[level]);

    d3.select("#topic1-scatter-indicator").text(
      `当前：${levelLabelShort[level]}受训教师比例`,
    );

    const dots = chartArea.selectAll(".scatter-dot").data(data, (d) => d.code);
    dots.exit().transition(t).attr("r", 0).remove();

    const enterDots = dots
      .enter()
      .append("circle")
      .attr("class", "scatter-dot")
      .attr("r", 0)
      .attr("fill", (d) => Topic1ContinentColors[d.continent] || Topic1ContinentColors.其他)
      .attr("opacity", (d) =>
        !Topic1Store.selectedContinent || d.continent === Topic1Store.selectedContinent
          ? 0.74
          : 0.16,
      )
      .attr("stroke", (d) =>
        Topic1Store.selectedContinent && d.continent === Topic1Store.selectedContinent
          ? "#0f172a"
          : "#fff",
      )
      .attr("stroke-width", (d) =>
        Topic1Store.selectedContinent && d.continent === Topic1Store.selectedContinent
          ? 1.8
          : 1,
      )
      .on("mouseover", function (ev, d) {
        d3.select(this).attr("r", 8).attr("opacity", 1).attr("stroke", "#102033");
        showTooltip(
          ev,
          `<div style="font-weight:600">${d.name}</div><div>大洲：<span style="color:#60a5fa;font-weight:bold">${d.continent}</span></div><div>教育支出：<span style="color:#60a5fa;font-weight:bold">${formatRate(d.x)}%</span></div><div>${levelLabelShort[level]}受训教师：<span style="color:#60a5fa;font-weight:bold">${formatRate(d.y)}%</span></div>`,
        );
      })
      .on("mousemove", moveTooltip)
      .on("mouseout", function () {
        resetContinentHighlight();
        hideTooltip();
      });

    enterDots
      .merge(dots)
      .transition(t)
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("fill", (d) => Topic1ContinentColors[d.continent] || Topic1ContinentColors.其他)
      .attr("r", (d) =>
        Topic1Store.selectedContinent && d.continent === Topic1Store.selectedContinent ? 7 : 5,
      )
      .attr("opacity", (d) =>
        !Topic1Store.selectedContinent || d.continent === Topic1Store.selectedContinent
          ? 0.74
          : 0.16,
      )
      .attr("stroke", (d) =>
        Topic1Store.selectedContinent && d.continent === Topic1Store.selectedContinent
          ? "#0f172a"
          : "#fff",
      )
      .attr("stroke-width", (d) =>
        Topic1Store.selectedContinent && d.continent === Topic1Store.selectedContinent
          ? 1.8
          : 1,
      );

    applyLegendState(Topic1Store.selectedContinent, 0);
  }

  drawScatter(currentLevel);
  d3.selectAll("#topic1-scatter-level-toggle .control-btn").classed(
    "active",
    function () {
      return d3.select(this).attr("data-level") === currentLevel;
    },
  );

  d3.selectAll("#topic1-scatter-level-toggle .control-btn").on(
    "click",
    function () {
      d3.selectAll("#topic1-scatter-level-toggle .control-btn").classed(
        "active",
        false,
      );
      d3.select(this).classed("active", true);
      Topic1Store.scatterLevel = d3.select(this).attr("data-level");
      currentLevel = Topic1Store.scatterLevel;
      drawScatter(currentLevel);
    },
  );
}

function getTopic1TeacherStageRows() {
  return Topic1Store.allCountries
    .filter((d) => d.primary && d.preprimary && d.secondary && d.expend)
    .filter(
      (d) =>
        d.primary.value > 0 && d.preprimary.value > 0 && d.secondary.value > 0,
    )
    .map((d) => ({
      code: d.code,
      name: d.name,
      primary: d.primary.value,
      preprimary: d.preprimary.value,
      secondary: d.secondary.value,
      gap: d.primary.value - d.preprimary.value,
      continent: d.continent || "其他",
      region: d.region || "其他",
    }))
    .sort((a, b) => b.gap - a.gap);
}

function renderTopic1ContinentBubblePreview() {
  const cId = "#topic1-vis-continent-bubbles";
  const container = d3.select(cId);
  if (container.empty()) return;
  container.html("");

  const rows = getTopic1TeacherStageRows();

  if (rows.length === 0) {
    container
      .append("div")
      .attr("class", "chart-loading")
      .text("数据不足，无法展示气泡图");
    return;
  }

  const node = container.node();
  const width = Math.max(node.getBoundingClientRect().width, 720);
  const height = width >= 920 ? 760 : 780;
  const stages = [
    { key: "preprimary", label: "学前" },
    { key: "primary", label: "小学" },
    { key: "secondary", label: "中学" },
  ];
  const continentOrder = ["非洲", "亚洲", "欧洲", "美洲", "大洋洲", "欧亚", "其他"];
  const grouped = d3.group(rows, (d) => d.continent || "其他");
  const continents = continentOrder.filter((d) => grouped.has(d));

  if (
    !Topic1Store.teacherBubbleContinent ||
    !grouped.has(Topic1Store.teacherBubbleContinent)
  ) {
    Topic1Store.teacherBubbleContinent = continents[0];
  }

  const summary = continents.flatMap((continent) => {
    const list = grouped.get(continent) || [];
    return stages.map((stage) => {
      const values = list.map((d) => d[stage.key]).filter((v) => Number.isFinite(v));
      return {
        continent,
        stage: stage.key,
        label: stage.label,
        count: values.length,
        mean: d3.mean(values) || 0,
        median: d3.median(values) || 0,
        min: d3.min(values) || 0,
        max: d3.max(values) || 0,
      };
    });
  });

  const svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("display", "block");

  const topMargin = { top: 124, right: 48, bottom: 26, left: 96 };
  const topH = Math.min(270, Math.max(230, height * 0.4));
  const topW = width - topMargin.left - topMargin.right;
  const bubbleG = svg
    .append("g")
    .attr("transform", `translate(${topMargin.left},${topMargin.top})`);

  svg
    .append("text")
    .attr("x", 24)
    .attr("y", 30)
    .style("font-size", "15px")
    .style("font-weight", "800")
    .style("fill", "#0f172a")
    .text("大洲气泡概览");

  svg
    .append("text")
    .attr("x", 24)
    .attr("y", 52)
    .style("font-size", "11px")
    .style("font-weight", "650")
    .style("fill", "#64748b")
    .text(`完整样本 ${rows.length} 个国家（或地区）；点击气泡查看国家（或地区）线图`);

  const xBubble = d3
    .scalePoint()
    .domain(stages.map((d) => d.label))
    .range([0, topW])
    .padding(0.55);
  const yBubble = d3
    .scalePoint()
    .domain(continents)
    .range([0, topH])
    .padding(0.5);
  const radius = d3
    .scaleSqrt()
    .domain([0, d3.max(summary, (d) => d.count) || 1])
    .range([8, 30]);
  const valueColor = d3
    .scaleSequential()
    .domain([35, 100])
    .interpolator(d3.interpolateBlues);

  bubbleG
    .selectAll(".bubble-grid-x")
    .data(stages)
    .enter()
    .append("line")
    .attr("x1", (d) => xBubble(d.label))
    .attr("x2", (d) => xBubble(d.label))
    .attr("y1", -18)
    .attr("y2", topH + 18)
    .attr("stroke", "#dbe8f4")
    .attr("stroke-width", 1);

  bubbleG
    .selectAll(".bubble-grid-y")
    .data(continents)
    .enter()
    .append("line")
    .attr("x1", -18)
    .attr("x2", topW + 18)
    .attr("y1", (d) => yBubble(d))
    .attr("y2", (d) => yBubble(d))
    .attr("stroke", "#edf4fb")
    .attr("stroke-width", 1);

  bubbleG
    .selectAll(".bubble-stage-label")
    .data(stages)
    .enter()
    .append("text")
    .attr("x", (d) => xBubble(d.label))
    .attr("y", -34)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("font-weight", "800")
    .style("fill", "#334155")
    .text((d) => d.label);

  bubbleG
    .selectAll(".bubble-continent-label")
    .data(continents)
    .enter()
    .append("text")
    .attr("x", -30)
    .attr("y", (d) => yBubble(d) + 4)
    .attr("text-anchor", "end")
    .style("font-size", "12px")
    .style("font-weight", "800")
    .style("fill", (d) => Topic1ContinentColors[d] || "#64748b")
    .text((d) => d);

  const bubble = bubbleG
    .selectAll(".continent-stage-bubble")
    .data(summary)
    .enter()
    .append("rect")
    .attr("class", "continent-stage-bubble")
    .attr("x", (d) => xBubble(d.label) - radius(d.count))
    .attr("y", (d) => yBubble(d.continent) - radius(d.count))
    .attr("width", (d) => radius(d.count) * 2)
    .attr("height", (d) => radius(d.count) * 2)
    .attr("rx", (d) => radius(d.count))
    .attr("fill", (d) => valueColor(Math.max(35, d.mean)))
    .attr("fill-opacity", (d) =>
      d.continent === Topic1Store.teacherBubbleContinent ? 0.95 : 0.72,
    )
    .attr("stroke", (d) =>
      d.continent === Topic1Store.teacherBubbleContinent
        ? "#0f172a"
        : Topic1ContinentColors[d.continent] || "#94a3b8",
    )
    .attr("stroke-width", (d) =>
      d.continent === Topic1Store.teacherBubbleContinent ? 2.4 : 1.2,
    )
    .style("cursor", "pointer")
    .on("mouseover", function (ev, d) {
      d3.select(this).attr("fill-opacity", 1).attr("stroke-width", 2.6);
      showTooltip(
        ev,
        `<div style="font-weight:700">${d.continent} · ${d.label}</div><div>国家（或地区）数：${d.count}</div><div>平均值：${formatRate(d.mean)}%</div><div>中位数：${formatRate(d.median)}%</div><div>范围：${formatRate(d.min)}% - ${formatRate(d.max)}%</div><div style="margin-top:4px;color:#64748b">点击固定该大洲线图</div>`,
      );
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", function (ev, d) {
      d3.select(this)
        .attr("fill-opacity", d.continent === Topic1Store.teacherBubbleContinent ? 0.95 : 0.72)
        .attr("stroke-width", d.continent === Topic1Store.teacherBubbleContinent ? 2.4 : 1.2);
      hideTooltip();
    })
    .on("click", function (ev, d) {
      Topic1Store.teacherBubbleContinent = d.continent;
      renderTopic1ContinentBubblePreview();
    });

  bubbleG
    .selectAll(".bubble-count-label")
    .data(summary.filter((d) => d.count >= 4))
    .enter()
    .append("text")
    .attr("x", (d) => xBubble(d.label))
    .attr("y", (d) => yBubble(d.continent) + 4)
    .attr("text-anchor", "middle")
    .style("pointer-events", "none")
    .style("font-size", "10px")
    .style("font-weight", "850")
    .style("fill", (d) => (d.mean >= 70 ? "#fff" : "#1e3a8a"))
    .text((d) => d.count);

  const legendX = Math.max(width - 220, 360);
  const legendY = 30;
  svg
    .append("rect")
    .attr("x", legendX - 12)
    .attr("y", legendY - 18)
    .attr("width", 188)
    .attr("height", 58)
    .attr("rx", 8)
    .attr("fill", "#f8fbfd")
    .attr("fill-opacity", 0.96)
    .attr("stroke", "#e0ebf5")
    .attr("stroke-width", 1);
  svg
    .append("text")
    .attr("x", legendX)
    .attr("y", legendY)
    .style("font-size", "10px")
    .style("font-weight", "700")
    .style("fill", "#64748b")
    .text("颜色：平均受训教师比例");
  const defs = svg.append("defs");
  const grad = defs
    .append("linearGradient")
    .attr("id", "topic1-bubble-value-gradient")
    .attr("x1", "0%")
    .attr("x2", "100%");
  [35, 55, 75, 100].forEach((v, i) => {
    grad
      .append("stop")
      .attr("offset", `${(i / 3) * 100}%`)
      .attr("stop-color", valueColor(v));
  });
  svg
    .append("rect")
    .attr("x", legendX)
    .attr("y", legendY + 10)
    .attr("width", 140)
    .attr("height", 9)
    .attr("rx", 4.5)
    .attr("fill", "url(#topic1-bubble-value-gradient)");
  svg
    .append("text")
    .attr("x", legendX)
    .attr("y", legendY + 34)
    .style("font-size", "10px")
    .style("font-weight", "700")
    .style("fill", "#64748b")
    .text("低");
  svg
    .append("text")
    .attr("x", legendX + 140)
    .attr("y", legendY + 34)
    .attr("text-anchor", "end")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .style("fill", "#64748b")
    .text("高");

  const selected = Topic1Store.teacherBubbleContinent;
  const selectedRows = (grouped.get(selected) || [])
    .slice()
    .sort((a, b) => d3.descending(Math.max(a.gap, 0), Math.max(b.gap, 0)));
  const lineMargin = { top: 64, right: 44, bottom: 52, left: 72 };
  const lineTop = topMargin.top + topH + 112;
  const lineW = width - lineMargin.left - lineMargin.right;
  const lineH = height - lineTop - lineMargin.bottom;

  svg
    .append("line")
    .attr("x1", 24)
    .attr("x2", width - 24)
    .attr("y1", lineTop - 70)
    .attr("y2", lineTop - 70)
    .attr("stroke", "#dbe8f4");

  svg
    .append("text")
    .attr("x", 24)
    .attr("y", lineTop - 44)
    .style("font-size", "15px")
    .style("font-weight", "850")
    .style("fill", Topic1ContinentColors[selected] || "#0f172a")
    .text(`${selected}国家（或地区）阶段变化线图`);

  svg
    .append("text")
    .attr("x", 24)
    .attr("y", lineTop - 22)
    .style("font-size", "11px")
    .style("font-weight", "650")
    .style("fill", "#64748b")
    .text(`共 ${selectedRows.length} 个完整样本国家（或地区）；每条线代表一个国家（或地区），悬停可查看明细`);

  const lineG = svg
    .append("g")
    .attr("transform", `translate(${lineMargin.left},${lineTop})`);
  const xLine = d3
    .scalePoint()
    .domain(stages.map((d) => d.label))
    .range([0, lineW])
    .padding(0.5);
  const yLine = d3.scaleLinear().domain([0, 100]).nice().range([lineH, 0]);

  lineG
    .append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(yLine).tickSize(-lineW).tickFormat(""))
    .selectAll("line")
    .attr("stroke", "#e6eef6");
  lineG
    .append("g")
    .attr("transform", `translate(0,${lineH})`)
    .call(d3.axisBottom(xLine))
    .call(styleAxis);
  lineG
    .append("g")
    .call(d3.axisLeft(yLine).ticks(5).tickFormat((d) => `${d}%`))
    .call(styleAxis);

  const line = d3
    .line()
    .x((d) => xLine(d.label))
    .y((d) => yLine(d.value))
    .curve(d3.curveMonotoneX);
  const selectedColor = Topic1ContinentColors[selected] || "#2563eb";
  const countrySeries = selectedRows.map((country) => ({
    ...country,
    values: stages.map((stage) => ({
      key: stage.key,
      label: stage.label,
      value: country[stage.key],
    })),
  }));

  const seriesG = lineG
    .selectAll(".continent-country-line")
    .data(countrySeries)
    .enter()
    .append("g")
    .attr("class", "continent-country-line")
    .style("cursor", "default");

  seriesG
    .append("path")
    .attr("d", (d) => line(d.values))
    .attr("fill", "none")
    .attr("stroke", selectedColor)
    .attr("stroke-width", 1.25)
    .attr("stroke-opacity", 0.22);

  seriesG
    .selectAll("circle")
    .data((d) => d.values.map((v) => ({ ...v, country: d })))
    .enter()
    .append("circle")
    .attr("cx", (d) => xLine(d.label))
    .attr("cy", (d) => yLine(d.value))
    .attr("r", 3.6)
    .attr("fill", selectedColor)
    .attr("fill-opacity", 0.45)
    .attr("stroke", "#fff")
    .attr("stroke-width", 1);

  seriesG
    .on("mouseover", function (ev, d) {
      seriesG.selectAll("path").attr("stroke-opacity", 0.08).attr("stroke-width", 1);
      seriesG.selectAll("circle").attr("fill-opacity", 0.16);
      d3.select(this).select("path").attr("stroke-opacity", 1).attr("stroke-width", 2.8);
      d3.select(this).selectAll("circle").attr("fill-opacity", 1).attr("r", 5);
      showTooltip(
        ev,
        `<div style="font-weight:700">${d.name}</div><div>大洲：${d.continent}</div><div>学前：${formatRate(d.preprimary)}%</div><div>小学：${formatRate(d.primary)}%</div><div>中学：${formatRate(d.secondary)}%</div><div>学前-小学差距：${formatRate(d.gap)} 个百分点</div>`,
      );
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", function () {
      seriesG.selectAll("path").attr("stroke-opacity", 0.22).attr("stroke-width", 1.25);
      seriesG.selectAll("circle").attr("fill-opacity", 0.45).attr("r", 3.6);
      hideTooltip();
    });

  lineG
    .append("text")
    .attr("x", lineW / 2)
    .attr("y", lineH + 40)
    .attr("text-anchor", "middle")
    .style("font-size", "11px")
    .style("font-weight", "700")
    .style("fill", "#64748b")
    .text("教育阶段");

  lineG
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -lineH / 2)
    .attr("y", -48)
    .attr("text-anchor", "middle")
    .style("font-size", "11px")
    .style("font-weight", "700")
    .style("fill", "#64748b")
    .text("受训教师比例 (%)");
}

function renderTopic1(geoFeatures) {
  if (!geoFeatures) {
    document
      .querySelectorAll(
        "#topic1-vis-map, #topic1-vis-ranking, #topic1-vis-scatter, #topic1-vis-continent-bubbles",
      )
      .forEach((el) => {
        el.innerHTML =
          '<div class="chart-loading" style="color:#ef4444">数据加载失败</div>';
      });
    return;
  }
  renderTopic1MapChart(geoFeatures);
  renderTopic1ScatterChart();
  renderTopic1ContinentBubblePreview();
}

let topic1LayoutTimer = null;
function scheduleTopic1LayoutRefresh() {
  clearTimeout(topic1LayoutTimer);
  topic1LayoutTimer = setTimeout(() => {
    if (!Topic1Store.allCountries || Topic1Store.allCountries.length === 0) return;
    renderTopic1ScatterChart();
    renderTopic1ContinentBubblePreview();
  }, 320);
}

function initResponsiveChartLayout() {
  window.addEventListener("resize", scheduleTopic1LayoutRefresh);
}

// ==================== 话题二：机会与平等 ====================
const Topic2Store = {
  mapDataset: new Map(),
  butterflyDataset: [],
  butterflyPool: [],
  selectedButterflyCodes: new Set(),
  scatterDataset: [],
  step3CompletionByCountry: new Map(),
  step3MapLatest: new Map(),
};
const TOPIC2_STEP3_EXCLUDED_CODES = new Set(["TWN"]);

async function loadTopic2Data() {
  try {
    const [worldTopo, csvUner, csvGpi, csvCompPrim, csvCompTert] =
      await Promise.all([
        d3
          .json("./data/countries-110m-topic2.json")
          .catch(() => d3.json("./data/countries-110m.json")),
        d3
          .csv("./data/WB_WDI_SE_PRM_UNER_latest_total_female_male.csv")
          .catch(() => []),
        d3
          .csv("./data/WB_WDI_SE_ENR_GPI_latest_primary_tertiary.csv")
          .catch(() => []),
        d3.csv("./data/WB_HCP_UISCR1.csv").catch(() => []),
        d3.csv("./data/HD_HCIP_TERT.csv").catch(() => []),
      ]);

    if (csvUner && csvUner.length > 0) {
      csvUner.forEach((row) => {
        const code = (row["country_code"] || "").trim().toUpperCase();
        if (!code) return;
        Topic2Store.mapDataset.set(code, {
          code,
          name: getCountryName(code, row["country_name"] || code),
          total: {
            value: parseFloat(row["uner_total"]),
            year: parseInt(row["uner_total_year"]),
          },
          female: {
            value: parseFloat(row["uner_female"]),
            year: parseInt(row["uner_female_year"]),
          },
          male: {
            value: parseFloat(row["uner_male"]),
            year: parseInt(row["uner_male_year"]),
          },
        });
      });
    } else {
      injectMockTopic2Data();
    }

    buildButterflyDataset();
    buildScatterDataset(csvGpi);
    buildStep3CompletionData(csvCompPrim, csvCompTert);

    return {
      geoFeatures: topojson.feature(worldTopo, worldTopo.objects.countries)
        .features,
    };
  } catch (err) {
    console.error("❌ 话题二数据加载失败:", err);
    injectMockTopic2Data();
    buildButterflyDataset();
    const worldTopo = await d3
      .json("./data/countries-110m.json")
      .catch(() => null);
    return {
      geoFeatures: worldTopo
        ? topojson.feature(worldTopo, worldTopo.objects.countries).features
        : null,
    };
  }
}

function injectMockTopic2Data() {
  const mockRates = {
    AFG: { name: "阿富汗", total: 55.2, male: 36.1, female: 66.4 },
    SDN: { name: "苏丹", total: 48.7, male: 40.2, female: 57.3 },
    SSD: { name: "南苏丹", total: 63.5, male: 58.1, female: 70.3 },
    NER: { name: "尼日尔", total: 59.1, male: 49.8, female: 68.4 },
    CHN: { name: "中国", total: 3.2, male: 2.9, female: 3.6 },
    USA: { name: "美国", total: 1.2, male: 1.3, female: 1.1 },
    GBR: { name: "英国", total: 0.8, male: 0.9, female: 0.7 },
    DEU: { name: "德国", total: 0.5, male: 0.6, female: 0.5 },
    IND: { name: "印度", total: 11.2, male: 9.8, female: 12.7 },
    BRA: { name: "巴西", total: 7.4, male: 8.1, female: 6.7 },
    ZAF: { name: "南非", total: 12.4, male: 11.8, female: 13.1 },
    EGY: { name: "埃及", total: 13.8, male: 11.2, female: 16.4 },
    PAK: { name: "巴基斯坦", total: 32.5, male: 25.4, female: 38.2 },
    ETH: { name: "埃塞俄比亚", total: 35.6, male: 30.1, female: 41.2 },
    KEN: { name: "肯尼亚", total: 14.7, male: 13.2, female: 16.3 },
  };
  Object.entries(mockRates).forEach(([code, d]) => {
    Topic2Store.mapDataset.set(code, {
      code,
      name: getCountryName(code, d.name),
      total: { value: d.total, year: 2022 },
      female: { value: d.female, year: 2022 },
      male: { value: d.male, year: 2022 },
    });
  });
}

function buildButterflyDataset() {
  buildButterflyPool();
}

function buildScatterDataset(csvGpi) {
  Topic2Store.scatterDataset = [];

  if (csvGpi && csvGpi.length > 0) {
    csvGpi.forEach((row) => {
      const code = (row["country_code"] || "").trim().toUpperCase();
      const primary = parseFloat(row["gpi_primary"]);
      const tertiary = parseFloat(row["gpi_tertiary"]);
      if (
        !code ||
        isNaN(primary) ||
        isNaN(tertiary) ||
        NON_COUNTRY_CODES.has(code)
      )
        return;

      const d = Topic2Store.mapDataset.get(code);
      Topic2Store.scatterDataset.push({
        code,
        name: getCountryName(code, d ? d.name : code),
        primary,
        tertiary,
      });
    });
  }

  if (Topic2Store.scatterDataset.length === 0) {
    Topic2Store.scatterDataset = [
      { code: "CHN", name: "中国", primary: 1.01, tertiary: 1.14 },
      { code: "IND", name: "印度", primary: 0.97, tertiary: 0.92 },
      { code: "AFG", name: "阿富汗", primary: 0.68, tertiary: 0.32 },
      { code: "SAU", name: "沙特阿拉伯", primary: 0.99, tertiary: 1.28 },
      { code: "YEM", name: "也门", primary: 0.79, tertiary: 0.44 },
      { code: "PAK", name: "巴基斯坦", primary: 0.84, tertiary: 0.71 },
      { code: "BRA", name: "巴西", primary: 0.98, tertiary: 1.31 },
      { code: "USA", name: "美国", primary: 1.0, tertiary: 1.38 },
    ];
  }
}

function buildStep3CompletionData(csvCompPrim, csvCompTert) {
  const byCountry = Topic2Store.step3CompletionByCountry;
  byCountry.clear();
  Topic2Store.step3MapLatest.clear();

  function ensureEntry(code) {
    if (!byCountry.has(code)) {
      byCountry.set(code, {
        primaryTotal: [],
        primaryFemale: [],
        primaryMale: [],
        tertiaryTotal: [],
        tertiaryFemale: [],
        tertiaryMale: [],
      });
    }
    return byCountry.get(code);
  }

  if (csvCompPrim && csvCompPrim.length > 0) {
    csvCompPrim.forEach((row) => {
      const code = (row["REF_AREA"] || "").trim().toUpperCase();
      const sex = (row["SEX"] || "").trim();
      const year = parseInt(row["TIME_PERIOD"]);
      const value = parseFloat(row["OBS_VALUE"]);
      const status = (row["OBS_STATUS"] || "A").trim();

      if (!code || NON_COUNTRY_CODES.has(code) || TOPIC2_STEP3_EXCLUDED_CODES.has(code)) return;
      if (isNaN(year) || isNaN(value) || value < 0) return;
      if (status !== "A") return;

      const e = ensureEntry(code);
      const pt = { year, value };
      if (sex === "_T") e.primaryTotal.push(pt);
      else if (sex === "F") e.primaryFemale.push(pt);
      else if (sex === "M") e.primaryMale.push(pt);
    });
  }

  if (csvCompTert && csvCompTert.length > 0) {
    csvCompTert.forEach((row) => {
      const code = (row["REF_AREA"] || "").trim().toUpperCase();
      const sex = (row["SEX"] || "").trim();
      const year = parseInt(row["TIME_PERIOD"]);
      const value = parseFloat(row["OBS_VALUE"]);

      if (!code || NON_COUNTRY_CODES.has(code) || TOPIC2_STEP3_EXCLUDED_CODES.has(code)) return;
      if (isNaN(year) || isNaN(value) || value < 0) return;

      const e = ensureEntry(code);
      const pt = { year, value };
      if (sex === "_T") e.tertiaryTotal.push(pt);
      else if (sex === "F") e.tertiaryFemale.push(pt);
      else if (sex === "M") e.tertiaryMale.push(pt);
    });
  }

  byCountry.forEach((d, code) => {
    d.primaryTotal.sort((a, b) => a.year - b.year);
    d.primaryFemale.sort((a, b) => a.year - b.year);
    d.primaryMale.sort((a, b) => a.year - b.year);
    d.tertiaryTotal.sort((a, b) => a.year - b.year);
    d.tertiaryFemale.sort((a, b) => a.year - b.year);
    d.tertiaryMale.sort((a, b) => a.year - b.year);

    if (d.primaryTotal.length > 0) {
      const latest = d.primaryTotal[d.primaryTotal.length - 1];
      Topic2Store.step3MapLatest.set(code, latest.value);
    }
  });

  if (byCountry.size === 0) {
    injectMockStep3Data();
  }
}

function injectMockStep3Data() {
  const mockData = {
    CHN: {
      primaryTotal: [
        { year: 2010, value: 94.5 },
        { year: 2015, value: 96.8 },
        { year: 2020, value: 98.2 },
        { year: 2022, value: 98.5 },
      ],
      primaryFemale: [
        { year: 2010, value: 94.2 },
        { year: 2015, value: 96.5 },
        { year: 2020, value: 98.1 },
        { year: 2022, value: 98.4 },
      ],
      primaryMale: [
        { year: 2010, value: 94.8 },
        { year: 2015, value: 97.1 },
        { year: 2020, value: 98.3 },
        { year: 2022, value: 98.6 },
      ],
      tertiaryTotal: [
        { year: 2010, value: 17.8 },
        { year: 2015, value: 26.5 },
        { year: 2020, value: 54.4 },
        { year: 2022, value: 60.1 },
      ],
      tertiaryFemale: [
        { year: 2010, value: 18.2 },
        { year: 2015, value: 28.1 },
        { year: 2020, value: 58.3 },
        { year: 2022, value: 64.2 },
      ],
      tertiaryMale: [
        { year: 2010, value: 17.4 },
        { year: 2015, value: 24.8 },
        { year: 2020, value: 50.2 },
        { year: 2022, value: 55.8 },
      ],
    },
    IND: {
      primaryTotal: [
        { year: 2010, value: 94.1 },
        { year: 2015, value: 96.7 },
        { year: 2020, value: 98.8 },
        { year: 2022, value: 99.2 },
      ],
      primaryFemale: [
        { year: 2010, value: 91.3 },
        { year: 2015, value: 94.8 },
        { year: 2020, value: 98.1 },
        { year: 2022, value: 98.7 },
      ],
      primaryMale: [
        { year: 2010, value: 96.8 },
        { year: 2015, value: 98.5 },
        { year: 2020, value: 99.4 },
        { year: 2022, value: 99.6 },
      ],
      tertiaryTotal: [
        { year: 2010, value: 17.9 },
        { year: 2015, value: 24.5 },
        { year: 2020, value: 31.8 },
        { year: 2022, value: 34.2 },
      ],
      tertiaryFemale: [
        { year: 2010, value: 15.2 },
        { year: 2015, value: 21.8 },
        { year: 2020, value: 29.6 },
        { year: 2022, value: 32.1 },
      ],
      tertiaryMale: [
        { year: 2010, value: 20.5 },
        { year: 2015, value: 27.1 },
        { year: 2020, value: 33.9 },
        { year: 2022, value: 36.2 },
      ],
    },
    USA: {
      primaryTotal: [
        { year: 2010, value: 98.2 },
        { year: 2015, value: 98.5 },
        { year: 2020, value: 98.8 },
        { year: 2022, value: 99.1 },
      ],
      primaryFemale: [
        { year: 2010, value: 98.4 },
        { year: 2015, value: 98.6 },
        { year: 2020, value: 98.9 },
        { year: 2022, value: 99.2 },
      ],
      primaryMale: [
        { year: 2010, value: 98.0 },
        { year: 2015, value: 98.4 },
        { year: 2020, value: 98.7 },
        { year: 2022, value: 99.0 },
      ],
      tertiaryTotal: [
        { year: 2010, value: 42.1 },
        { year: 2015, value: 45.8 },
        { year: 2020, value: 49.2 },
        { year: 2022, value: 50.5 },
      ],
      tertiaryFemale: [
        { year: 2010, value: 45.2 },
        { year: 2015, value: 49.1 },
        { year: 2020, value: 52.8 },
        { year: 2022, value: 54.1 },
      ],
      tertiaryMale: [
        { year: 2010, value: 38.8 },
        { year: 2015, value: 42.3 },
        { year: 2020, value: 45.4 },
        { year: 2022, value: 46.7 },
      ],
    },
    AFG: {
      primaryTotal: [
        { year: 2010, value: 54.5 },
        { year: 2015, value: 63.2 },
        { year: 2020, value: 58.7 },
        { year: 2022, value: 52.3 },
      ],
      primaryFemale: [
        { year: 2010, value: 38.2 },
        { year: 2015, value: 49.8 },
        { year: 2020, value: 41.2 },
        { year: 2022, value: 32.1 },
      ],
      primaryMale: [
        { year: 2010, value: 70.8 },
        { year: 2015, value: 76.5 },
        { year: 2020, value: 76.1 },
        { year: 2022, value: 72.4 },
      ],
      tertiaryTotal: [
        { year: 2010, value: 5.2 },
        { year: 2015, value: 8.7 },
        { year: 2020, value: 7.2 },
        { year: 2022, value: 4.8 },
      ],
      tertiaryFemale: [
        { year: 2010, value: 2.1 },
        { year: 2015, value: 5.2 },
        { year: 2020, value: 3.8 },
        { year: 2022, value: 1.8 },
      ],
      tertiaryMale: [
        { year: 2010, value: 8.3 },
        { year: 2015, value: 12.1 },
        { year: 2020, value: 10.5 },
        { year: 2022, value: 7.8 },
      ],
    },
    FRA: {
      primaryTotal: [
        { year: 2010, value: 99.1 },
        { year: 2015, value: 99.3 },
        { year: 2020, value: 99.5 },
        { year: 2022, value: 99.6 },
      ],
      primaryFemale: [
        { year: 2010, value: 99.2 },
        { year: 2015, value: 99.3 },
        { year: 2020, value: 99.5 },
        { year: 2022, value: 99.6 },
      ],
      primaryMale: [
        { year: 2010, value: 99.0 },
        { year: 2015, value: 99.3 },
        { year: 2020, value: 99.5 },
        { year: 2022, value: 99.6 },
      ],
      tertiaryTotal: [
        { year: 2010, value: 35.2 },
        { year: 2015, value: 40.1 },
        { year: 2020, value: 45.8 },
        { year: 2022, value: 47.2 },
      ],
      tertiaryFemale: [
        { year: 2010, value: 38.5 },
        { year: 2015, value: 44.2 },
        { year: 2020, value: 50.1 },
        { year: 2022, value: 51.8 },
      ],
      tertiaryMale: [
        { year: 2010, value: 31.8 },
        { year: 2015, value: 35.8 },
        { year: 2020, value: 41.2 },
        { year: 2022, value: 42.5 },
      ],
    },
    JPN: {
      primaryTotal: [
        { year: 2010, value: 99.8 },
        { year: 2015, value: 99.9 },
        { year: 2020, value: 100.0 },
        { year: 2022, value: 100.0 },
      ],
      primaryFemale: [
        { year: 2010, value: 99.8 },
        { year: 2015, value: 99.9 },
        { year: 2020, value: 100.0 },
        { year: 2022, value: 100.0 },
      ],
      primaryMale: [
        { year: 2010, value: 99.8 },
        { year: 2015, value: 99.9 },
        { year: 2020, value: 100.0 },
        { year: 2022, value: 100.0 },
      ],
      tertiaryTotal: [
        { year: 2010, value: 45.2 },
        { year: 2015, value: 50.1 },
        { year: 2020, value: 52.8 },
        { year: 2022, value: 53.5 },
      ],
      tertiaryFemale: [
        { year: 2010, value: 47.8 },
        { year: 2015, value: 53.2 },
        { year: 2020, value: 56.1 },
        { year: 2022, value: 56.8 },
      ],
      tertiaryMale: [
        { year: 2010, value: 42.5 },
        { year: 2015, value: 46.8 },
        { year: 2020, value: 49.3 },
        { year: 2022, value: 50.0 },
      ],
    },
    NGA: {
      primaryTotal: [
        { year: 2010, value: 61.2 },
        { year: 2015, value: 68.5 },
        { year: 2020, value: 72.8 },
        { year: 2022, value: 74.2 },
      ],
      primaryFemale: [
        { year: 2010, value: 54.8 },
        { year: 2015, value: 62.2 },
        { year: 2020, value: 67.1 },
        { year: 2022, value: 68.5 },
      ],
      primaryMale: [
        { year: 2010, value: 67.8 },
        { year: 2015, value: 74.8 },
        { year: 2020, value: 78.5 },
        { year: 2022, value: 79.9 },
      ],
      tertiaryTotal: [
        { year: 2010, value: 5.2 },
        { year: 2015, value: 6.8 },
        { year: 2020, value: 8.5 },
        { year: 2022, value: 9.2 },
      ],
      tertiaryFemale: [
        { year: 2010, value: 4.8 },
        { year: 2015, value: 6.2 },
        { year: 2020, value: 7.8 },
        { year: 2022, value: 8.5 },
      ],
      tertiaryMale: [
        { year: 2010, value: 5.6 },
        { year: 2015, value: 7.4 },
        { year: 2020, value: 9.2 },
        { year: 2022, value: 9.9 },
      ],
    },
    BRA: {
      primaryTotal: [
        { year: 2010, value: 93.8 },
        { year: 2015, value: 96.2 },
        { year: 2020, value: 97.8 },
        { year: 2022, value: 98.1 },
      ],
      primaryFemale: [
        { year: 2010, value: 94.5 },
        { year: 2015, value: 96.8 },
        { year: 2020, value: 98.1 },
        { year: 2022, value: 98.4 },
      ],
      primaryMale: [
        { year: 2010, value: 93.1 },
        { year: 2015, value: 95.6 },
        { year: 2020, value: 97.5 },
        { year: 2022, value: 97.8 },
      ],
      tertiaryTotal: [
        { year: 2010, value: 18.5 },
        { year: 2015, value: 24.2 },
        { year: 2020, value: 32.8 },
        { year: 2022, value: 35.2 },
      ],
      tertiaryFemale: [
        { year: 2010, value: 21.2 },
        { year: 2015, value: 27.8 },
        { year: 2020, value: 37.2 },
        { year: 2022, value: 40.1 },
      ],
      tertiaryMale: [
        { year: 2010, value: 15.6 },
        { year: 2015, value: 20.5 },
        { year: 2020, value: 28.2 },
        { year: 2022, value: 30.1 },
      ],
    },
  };

  Object.keys(mockData).forEach((code) => {
    Topic2Store.step3CompletionByCountry.set(code, mockData[code]);
    if (mockData[code].primaryTotal.length > 0) {
      const latest =
        mockData[code].primaryTotal[mockData[code].primaryTotal.length - 1];
      Topic2Store.step3MapLatest.set(code, latest.value);
    }
  });
}

function renderTopic2MapChart(geoFeatures) {
  const mapId = "#topic2-vis-map";
  const topId = "#topic2-vis-map-top10";
  const mapContainer = d3.select(mapId);
  const topContainer = d3.select(topId);

  mapContainer.html("");
  topContainer.html("");

  const mapNode = mapContainer.node();
  const topNode = topContainer.node();
  const mapWidth = Math.max(mapNode.getBoundingClientRect().width, 300);
  const mapHeight = Math.max(mapNode.getBoundingClientRect().height, 420);
  const topWidth = Math.max(topNode.getBoundingClientRect().width, 220);
  const topHeight = Math.max(topNode.getBoundingClientRect().height, 420);

  const mapSvg = mapContainer
    .append("svg")
    .attr("width", mapWidth)
    .attr("height", mapHeight);
  const featureCollection = {
    type: "FeatureCollection",
    features: geoFeatures,
  };
  const projection = d3
    .geoEqualEarth()
    .fitSize([mapWidth, mapHeight - 10], featureCollection);
  const pathGen = d3.geoPath().projection(projection);

  mapSvg
    .append("rect")
    .attr("width", mapWidth)
    .attr("height", mapHeight)
    .attr("fill", "#dbeafe");
  const mapG = mapSvg.append("g");

  const center = { x: mapWidth / 2, y: mapHeight / 2 };
  const pan = { x: 0, y: 0 };
  let scale = 1;

  function clampPan() {
    const mx = Math.max(0, ((scale - 1) * mapWidth) / 2);
    const my = Math.max(0, ((scale - 1) * mapHeight) / 2);
    pan.x = Math.max(-mx, Math.min(mx, pan.x));
    pan.y = Math.max(-my, Math.min(my, pan.y));
  }

  function applyTransform() {
    clampPan();
    mapG.attr(
      "transform",
      `translate(${center.x + pan.x},${center.y + pan.y}) scale(${scale}) translate(${-center.x},${-center.y})`,
    );
  }

  mapSvg.style("cursor", "grab").call(
    d3
      .drag()
      .on("start", () => d3.select(mapSvg.node()).style("cursor", "grabbing"))
      .on("drag", (ev) => {
        if (scale > 1.01) {
          pan.x += ev.dx;
          pan.y += ev.dy;
          applyTransform();
        }
      })
      .on("end", () => d3.select(mapSvg.node()).style("cursor", "grab")),
  );

  mapSvg.on("wheel", function (ev) {
    ev.preventDefault();
    const delta = ev.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(1, Math.min(4, scale * delta));
    const mouseX = ev.offsetX;
    const mouseY = ev.offsetY;
    pan.x = mouseX - center.x - (mouseX - center.x) * (newScale / scale);
    pan.y = mouseY - center.y - (mouseY - center.y) * (newScale / scale);
    scale = newScale;
    applyTransform();
  });

  const legendDiv = mapContainer.append("div").attr("class", "map-legend");
  legendDiv
    .append("div")
    .style("font-size", "11px")
    .style("color", "#475569")
    .style("margin-bottom", "4px")
    .text("失学率 (%)");
  const gradientId = "grad-" + Math.random().toString(36).slice(2, 7);
  const legendSvg = legendDiv
    .append("svg")
    .attr("width", 140)
    .attr("height", 22);
  const defs = legendSvg.append("defs");
  const grad = defs
    .append("linearGradient")
    .attr("id", gradientId)
    .attr("x1", "0%")
    .attr("x2", "100%");
  grad.append("stop").attr("offset", "0%").attr("stop-color", "#eff6ff");
  grad.append("stop").attr("offset", "50%").attr("stop-color", "#3b82f6");
  grad.append("stop").attr("offset", "100%").attr("stop-color", "#1e3a5f");
  legendSvg
    .append("rect")
    .attr("width", 140)
    .attr("height", 12)
    .attr("fill", `url(#${gradientId})`)
    .attr("rx", 4);
  legendDiv
    .append("div")
    .attr("class", "legend-labels")
    .html("<span>0%</span><span>较高</span>");
  const missingRow = legendDiv
    .append("div")
    .style("display", "flex")
    .style("align-items", "center")
    .style("gap", "6px")
    .style("margin-top", "7px")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .style("color", "#475569");
  missingRow
    .append("span")
    .style("width", "12px")
    .style("height", "12px")
    .style("border-radius", "3px")
    .style("background", VIS.mapMissing)
    .style("border", "1px solid #cbd5e1");
  missingRow.append("span").text("灰色 = 缺数据");

  const margin = { top: 72, right: 22, bottom: 30, left: 92 };
  const iW = topWidth - margin.left - margin.right;
  const sectionH = Math.max(topHeight - margin.top - margin.bottom, 260);

  const topSvg = topContainer
    .append("svg")
    .attr("width", topWidth)
    .attr("height", topHeight);
  let rankMode = "high";
  let currentDim = "total";

  const toggleG = topSvg
    .append("g")
    .attr("transform", `translate(${Math.max(8, topWidth / 2 - 88)},12)`);
  const toggleBtns = toggleG
    .selectAll("g")
    .data([
      { key: "high", label: "较高" },
      { key: "low", label: "较低" },
    ])
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(${i * 94},0)`)
    .style("cursor", "pointer")
    .on("click", function (event, d) {
      rankMode = d.key;
      updateRankToggle();
      updateVisuals(currentDim);
    });

  toggleBtns
    .append("rect")
    .attr("width", 82)
    .attr("height", 26)
    .attr("rx", 13)
    .attr("stroke-width", 1);
  toggleBtns
    .append("text")
    .attr("x", 41)
    .attr("y", 17)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("font-weight", "600")
    .text((d) => d.label);

  function updateRankToggle() {
    toggleBtns
      .select("rect")
      .attr("fill", (d) => (d.key === rankMode ? "#2563eb" : "#e2e8f0"))
      .attr("stroke", (d) => (d.key === rankMode ? "#1d4ed8" : "#cbd5e1"));
    toggleBtns
      .select("text")
      .attr("fill", (d) => (d.key === rankMode ? "#ffffff" : "#475569"));
  }

  const rankG = topSvg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  const rankTitle = rankG
    .append("text")
    .attr("x", topWidth / 2 - margin.left)
    .attr("y", -16)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("font-weight", "600")
    .style("fill", "#1e293b");

  const xScale = d3.scaleLinear().range([0, iW]);
  const yScale = d3.scaleBand().range([0, sectionH]).padding(0.22);
  const xAxisG = rankG
    .append("g")
    .attr("transform", `translate(0,${sectionH})`);
  const yAxisG = rankG.append("g");

  function getCountryCode(d) {
    return ISO_NUM_TO_A3[+d.id] || null;
  }

  const mapPaths = mapG
    .selectAll("path")
    .data(geoFeatures)
    .enter()
    .append("path")
    .attr("d", pathGen)
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 0.4)
    .attr("fill", "#e5e7eb");

  const dimLabel = {
    total: "总体失学率 (%)",
    male: "男孩失学率 (%)",
    female: "女孩失学率 (%)",
  };

  function updateVisuals(dim) {
    currentDim = dim;
    const t = d3.transition().duration(700);

    // 更新右上角的"当前查看"标签
    d3.select("#topic2-map-mode-indicator").text(`当前查看：${dimLabel[dim]}`);

    const allVals = Array.from(Topic2Store.mapDataset.values())
      .map((d) => d[dim]?.value)
      .filter((v) => v != null && !isNaN(v));
    const maxVal = d3.max(allVals) || 100;
    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, maxVal]);

    mapPaths
      .on("mouseover", function (ev, d) {
        const code = getCountryCode(d);
        const data = code ? Topic2Store.mapDataset.get(code) : null;
        if (!data) return;
        d3.select(this).attr("stroke", "#102033").attr("stroke-width", 1.5);
        showTooltip(
          ev,
          `<div style="font-weight:600;margin-bottom:4px">${data.name}</div><div>${dimLabel[dim].replace(" (%)", "")}：<span style="color:#60a5fa;font-weight:bold">${formatRate(data[dim].value)}%</span></div><div style="font-size:11px;color:#94a3b8">数据年份：${data[dim].year || "—"}</div>`,
        );
      })
      .on("mousemove", moveTooltip)
      .on("mouseout", function () {
        d3.select(this).attr("stroke", "#fff").attr("stroke-width", 0.4);
        hideTooltip();
      })
      .transition(t)
      .attr("fill", (d) => {
        const code = getCountryCode(d);
        const data = code ? Topic2Store.mapDataset.get(code) : null;
        return data && data[dim]?.value != null && !isNaN(data[dim].value)
          ? colorScale(data[dim].value)
          : VIS.mapMissing;
      });

    const ranked = Array.from(Topic2Store.mapDataset.values()).filter(
      (d) => d[dim]?.value != null && !isNaN(d[dim].value),
    );
    const top10 = ranked
      .slice()
      .sort((a, b) => b[dim].value - a[dim].value)
      .slice(0, 10);
    const bottom10 = ranked
      .slice()
      .sort((a, b) => a[dim].value - b[dim].value)
      .slice(0, 10);
    const rankRows = rankMode === "high" ? top10 : bottom10;

    rankTitle.text(
      rankMode === "high"
        ? "失学率较高的 10 个国家（或地区）"
        : "失学率较低的 10 个国家（或地区）",
    );
    const maxRankVal = d3.max(rankRows, (d) => d[dim].value) || 1;
    xScale.domain([0, maxRankVal * 1.15]).nice();
    yScale.domain(rankRows.map((d) => d.name));

    xAxisG
      .transition(t)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(3)
          .tickFormat((d) => d + "%"),
      )
      .call(styleAxis);
    yAxisG
      .transition(t)
      .call(d3.axisLeft(yScale))
      .call(styleAxis);

    function topRankFill(d) {
      return d3.interpolateBlues(Math.max(0.08, d[dim].value / maxVal));
    }

    function highlightTopRankBar(target) {
      const activeH = Math.min(yScale.bandwidth() + 4, yScale.step() - 2);
      rankG
        .selectAll(".bar-rank")
        .interrupt("top-rank-hover")
        .transition("top-rank-hover")
        .duration(140)
        .attr("y", (d) => yScale(d.name) + (yScale.bandwidth() - (d.code === target.code ? activeH : yScale.bandwidth())) / 2)
        .attr("height", (d) => (d.code === target.code ? activeH : yScale.bandwidth()))
        .attr("fill", (d) => (d.code === target.code ? "#1d4ed8" : topRankFill(d)))
        .attr("stroke", (d) => (d.code === target.code ? "#0f172a" : "none"))
        .attr("stroke-width", (d) => (d.code === target.code ? 1.4 : 0))
        .style("opacity", (d) => (d.code === target.code ? 1 : 0.28));

      rankG
        .selectAll(".rank-value-label")
        .interrupt("top-rank-hover")
        .transition("top-rank-hover")
        .duration(140)
        .style("font-size", (d) => (d.code === target.code ? "10px" : "9px"))
        .style("font-weight", (d) => (d.code === target.code ? "800" : "700"))
        .style("fill", (d) => (d.code === target.code ? "#0f172a" : "#64748b"))
        .style("opacity", (d) => (d.code === target.code ? 1 : 0.45));
    }

    function resetTopRankHighlight() {
      rankG
        .selectAll(".bar-rank")
        .interrupt("top-rank-hover")
        .transition("top-rank-hover")
        .duration(160)
        .attr("y", (d) => yScale(d.name))
        .attr("height", yScale.bandwidth())
        .attr("fill", topRankFill)
        .attr("stroke", "none")
        .attr("stroke-width", 0)
        .style("opacity", 1);

      rankG
        .selectAll(".rank-value-label")
        .interrupt("top-rank-hover")
        .transition("top-rank-hover")
        .duration(160)
        .style("font-size", "9px")
        .style("font-weight", "700")
        .style("fill", "#102033")
        .style("opacity", 1);
    }

    const bars = rankG.selectAll(".bar-rank").data(rankRows, (d) => d.code);
    bars.exit().transition(t).attr("width", 0).style("opacity", 0).remove();
    const mergedBars = bars
      .enter()
      .append("rect")
      .attr("class", "bar-rank")
      .attr("rx", 5)
      .attr("y", (d) => yScale(d.name))
      .attr("height", yScale.bandwidth())
      .attr("x", 0)
      .attr("width", 0)
      .attr("fill", topRankFill)
      .merge(bars);

    mergedBars
      .on("mouseover", function (ev, d) {
        highlightTopRankBar(d);
        showTooltip(
          ev,
          `<div style="font-weight:600;margin-bottom:4px">${d.name}</div><div>${dimLabel[dim].replace(" (%)", "")}：${formatRate(d[dim].value)}%</div><div style="font-size:11px;color:#94a3b8">数据年份：${d[dim].year || "—"}</div>`,
        );
      })
      .on("mousemove", moveTooltip)
      .on("mouseout", function () {
        resetTopRankHighlight();
        hideTooltip();
      })
      .transition(t)
      .attr("y", (d) => yScale(d.name))
      .attr("height", yScale.bandwidth())
      .attr("width", (d) => xScale(d[dim].value));

    const labels = rankG.selectAll(".rank-value-label").data(rankRows, (d) => d.code);
    labels.exit().remove();
    labels
      .enter()
      .append("text")
      .attr("class", "rank-value-label")
      .attr("y", (d) => yScale(d.name) + yScale.bandwidth() / 2 + 3)
      .style("font-size", "9px")
      .style("font-weight", "700")
      .style("fill", "#102033")
      .merge(labels)
      .transition(t)
      .attr("x", (d) => xScale(d[dim].value) + 5)
      .attr("y", (d) => yScale(d.name) + yScale.bandwidth() / 2 + 3)
      .text((d) => formatRate(d[dim].value) + "%");
  }

  updateRankToggle();
  updateVisuals("total");

  d3.selectAll("#topic2-map-dimension-toggle .control-btn").on(
    "click",
    function () {
      d3.selectAll("#topic2-map-dimension-toggle .control-btn").classed(
        "active",
        false,
      );
      d3.select(this).classed("active", true);
      updateVisuals(d3.select(this).attr("data-view"));
    },
  );
}

const BUTTERFLY_BATCH_SIZE = 15;
const NON_COUNTRY_CODES = new Set([
  "WLD",
  "HIC",
  "LIC",
  "LMC",
  "UMC",
  "OECD",
  "EUU",
  "EAS",
  "SAS",
  "SSF",
  "NAC",
  "LCN",
  "MEA",
  "ECA",
  "SST",
]);

function buildButterflyPool() {
  Topic2Store.butterflyPool = Array.from(Topic2Store.mapDataset.values())
    .filter(
      (d) =>
        d.male?.value != null &&
        d.female?.value != null &&
        !isNaN(d.male.value) &&
        !isNaN(d.female.value),
    )
    .filter((d) => !NON_COUNTRY_CODES.has(d.code))
    .filter((d) => d.female.value > d.male.value)
    .map((d) => ({
      country: d.name,
      code: d.code,
      male: d.male.value,
      female: d.female.value,
      gap: d.female.value - d.male.value,
    }))
    .sort((a, b) => b.gap - a.gap);
  Topic2Store.butterflyDataset = Topic2Store.butterflyPool.slice(
    0,
    BUTTERFLY_BATCH_SIZE,
  );
}

function getRandomButterflyBatch() {
  return d3
    .shuffle(Topic2Store.butterflyPool.slice())
    .slice(0, BUTTERFLY_BATCH_SIZE)
    .sort((a, b) => b.gap - a.gap);
}

function renderTopic2ButterflyChart() {
  const containerId = "#topic2-vis-butterfly";
  const container = d3.select(containerId);
  container.html("");

  const selectedCodes = Topic2Store.selectedButterflyCodes;
  const selectedDataset = Topic2Store.butterflyPool
    .filter((d) => selectedCodes.has(d.code))
    .sort((a, b) => b.gap - a.gap);
  const dataset = selectedDataset.length > 0 ? selectedDataset : Topic2Store.butterflyDataset;
  if (!dataset || dataset.length === 0) {
    container
      .append("div")
      .attr("class", "chart-loading")
      .text("蝴蝶图数据不足");
    return;
  }

  const controls = container.append("div").attr("class", "butterfly-controls");
  const select = controls
    .append("select")
    .attr("class", "butterfly-select")
    .attr("aria-label", "选择国家（或地区）进行比较");
  select.append("option").attr("value", "").text("选择国家（或地区）");
  Topic2Store.butterflyPool.forEach((d) => {
    select
      .append("option")
      .attr("value", d.code)
      .property("disabled", selectedCodes.has(d.code))
      .text(`${d.country}（女-男 ${formatRate(d.gap)} pct）`);
  });

  controls
    .append("button")
    .attr("class", "butterfly-action-btn")
    .attr("type", "button")
    .text("添加")
    .on("click", () => {
      const code = select.node().value;
      if (!code) return;
      selectedCodes.add(code);
      renderTopic2ButterflyChart();
    });

  controls
    .append("button")
    .attr("class", "butterfly-action-btn")
    .attr("type", "button")
    .text("换一批")
    .on("click", () => {
      selectedCodes.clear();
      Topic2Store.butterflyDataset = getRandomButterflyBatch();
      renderTopic2ButterflyChart();
    });

  controls
    .append("button")
    .attr("class", "butterfly-action-btn secondary")
    .attr("type", "button")
    .property("disabled", selectedCodes.size === 0)
    .text("清空选择")
    .on("click", () => {
      selectedCodes.clear();
      renderTopic2ButterflyChart();
    });

  const chips = container.append("div").attr("class", "butterfly-selected-list");
  if (selectedDataset.length === 0) {
    chips.append("span").attr("class", "butterfly-empty-state").text("当前展示随机国家（或地区），可添加指定国家（或地区）进行比较");
  } else {
    selectedDataset.forEach((d) => {
      const chip = chips.append("button").attr("class", "butterfly-chip").attr("type", "button");
      chip.append("span").text(d.country);
      chip.append("span").attr("aria-hidden", "true").text("×");
      chip.on("click", () => {
        selectedCodes.delete(d.code);
        renderTopic2ButterflyChart();
      });
    });
  }

  const node = container.node();
  const width = Math.max(node.getBoundingClientRect().width || 900, 600);
  const height = Math.max((node.getBoundingClientRect().height || 520) - 94, 380);

  const margin = { top: 50, bottom: 30, left: 0, right: 0 };
  const midX = width / 2;
  const barMaxW = midX - 120;
  const innerH = height - margin.top - margin.bottom;

  const svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const tooltip = d3.select("#global-tooltip");
  const ttShow = (ev, html) => {
    tooltip
      .interrupt()
      .html(html)
      .style("left", ev.clientX + 16 + "px")
      .style("top", ev.clientY - 10 + "px")
      .style("opacity", "1");
  };
  const ttMove = (ev) =>
    tooltip
      .style("left", ev.clientX + 16 + "px")
      .style("top", ev.clientY - 10 + "px");
  const ttHide = () => tooltip.style("opacity", "0");

  svg
    .append("text")
    .attr("x", midX - barMaxW / 2)
    .attr("y", 28)
    .attr("text-anchor", "middle")
    .style("fill", "#f43f5e")
    .style("font-weight", "700")
    .style("font-size", "13px")
    .text("← 女孩失学率");
  svg
    .append("text")
    .attr("x", midX + barMaxW / 2)
    .attr("y", 28)
    .attr("text-anchor", "middle")
    .style("fill", "#3b82f6")
    .style("font-weight", "700")
    .style("font-size", "13px")
    .text("男孩失学率 →");

  svg
    .append("line")
    .attr("x1", midX)
    .attr("x2", midX)
    .attr("y1", margin.top - 10)
    .attr("y2", height - margin.bottom)
    .attr("stroke", "#94a3b8")
    .attr("stroke-dasharray", "4,4")
    .attr("stroke-width", 1.5);

  function drawButterflyLayer(nextDataset, animateIn = false) {
    svg.select(".butterfly-dynamic-layer").remove();

    const layer = svg
      .append("g")
      .attr("class", "butterfly-dynamic-layer")
      .style("opacity", animateIn ? 0 : 1)
      .attr("transform", animateIn ? "translate(0,-10)" : "translate(0,0)");

    const maxVal = d3.max(nextDataset, (d) => Math.max(d.male, d.female));
    const xScale = d3.scaleLinear().domain([0, maxVal]).range([0, barMaxW]);
    const yScale = d3
      .scaleBand()
      .domain(nextDataset.map((d) => d.country))
      .range([margin.top, margin.top + innerH])
      .padding(0.28);

    nextDataset.forEach((d, i) => {
      if (i % 2 === 0)
        layer
          .append("rect")
          .attr("x", 0)
          .attr(
            "y",
            yScale(d.country) - (yScale.step() * yScale.paddingInner()) / 2,
          )
          .attr("width", width)
          .attr("height", yScale.step())
          .attr("fill", "#f8fafc");
    });

    layer
      .selectAll(".bar-female")
      .data(nextDataset)
      .enter()
      .append("rect")
      .attr("class", "bar-female")
      .attr("x", midX)
      .attr("y", (d) => yScale(d.country))
      .attr("width", 0)
      .attr("height", yScale.bandwidth())
      .attr("fill", "#f43f5e")
      .attr("rx", 3)
      .style("opacity", 0.85)
      .on("mouseover", function (ev, d) {
        ttShow(
          ev,
          `<b>${d.country}</b><br>女孩失学率：<span style="color:#f43f5e">${formatRate(d.female)}%</span><br>比男孩高：${formatRate(d.gap)} 个百分点`,
        );
      })
      .on("mousemove", ttMove)
      .on("mouseout", ttHide)
      .transition()
      .duration(520)
      .ease(d3.easeCubicOut)
      .attr("x", (d) => midX - xScale(d.female))
      .attr("width", (d) => xScale(d.female));

    layer
      .selectAll(".bar-male")
      .data(nextDataset)
      .enter()
      .append("rect")
      .attr("class", "bar-male")
      .attr("x", midX)
      .attr("y", (d) => yScale(d.country))
      .attr("width", 0)
      .attr("height", yScale.bandwidth())
      .attr("fill", "#3b82f6")
      .attr("rx", 3)
      .style("opacity", 0.85)
      .on("mouseover", function (ev, d) {
        ttShow(
          ev,
          `<b>${d.country}</b><br>男孩失学率：<span style="color:#3b82f6">${formatRate(d.male)}%</span><br>女孩比男孩高：${formatRate(d.gap)} 个百分点`,
        );
      })
      .on("mousemove", ttMove)
      .on("mouseout", ttHide)
      .transition()
      .duration(520)
      .ease(d3.easeCubicOut)
      .attr("width", (d) => xScale(d.male));

    layer
      .selectAll(".country-label")
      .data(nextDataset)
      .enter()
      .append("text")
      .attr("class", "country-label")
      .attr("x", midX)
      .attr("y", (d) => yScale(d.country) + yScale.bandwidth() / 2 + 4)
      .attr("text-anchor", "middle")
      .style("font-size", "11px")
      .style("font-weight", "600")
      .style("fill", "#1e293b")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .text((d) => d.country)
      .transition()
      .duration(380)
      .delay(120)
      .style("opacity", 1);

    layer
      .selectAll(".label-female")
      .data(nextDataset)
      .enter()
      .append("text")
      .attr("class", "label-female")
      .attr("x", (d) => midX - xScale(d.female) - 4)
      .attr("y", (d) => yScale(d.country) + yScale.bandwidth() / 2 + 4)
      .attr("text-anchor", "end")
      .style("font-size", "10px")
      .style("fill", "#e11d48")
      .style("opacity", 0)
      .text((d) => formatRate(d.female) + "%")
      .transition()
      .duration(380)
      .delay(180)
      .style("opacity", 1);

    layer
      .selectAll(".label-male")
      .data(nextDataset)
      .enter()
      .append("text")
      .attr("class", "label-male")
      .attr("x", (d) => midX + xScale(d.male) + 4)
      .attr("y", (d) => yScale(d.country) + yScale.bandwidth() / 2 + 4)
      .attr("text-anchor", "start")
      .style("font-size", "10px")
      .style("fill", "#2563eb")
      .style("opacity", 0)
      .text((d) => formatRate(d.male) + "%")
      .transition()
      .duration(380)
      .delay(180)
      .style("opacity", 1);

    if (animateIn) {
      layer
        .transition()
        .duration(280)
        .style("opacity", 1)
        .attr("transform", "translate(0,0)");
    }
  }

  drawButterflyLayer(dataset);
}

function renderTopic2ScatterChart() {
  const containerId = "#topic2-vis-scatter";
  const container = d3.select(containerId);
  container.html("");

  const dataset = Topic2Store.scatterDataset;
  if (!dataset || dataset.length === 0) {
    container
      .append("div")
      .attr("class", "chart-loading")
      .text("散点图数据不足");
    return;
  }

  const node = container.node();
  const width = Math.max(node.getBoundingClientRect().width || 500, 360);
  const height = Math.max(node.getBoundingClientRect().height || 420, 380);
  const margin = { top: 38, right: 36, bottom: 56, left: 64 };
  const iw = width - margin.left - margin.right;
  const ih = height - margin.top - margin.bottom;

  const svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  const chartArea = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // 使用动态范围，基于实际数据
  const allPrim = dataset.map((d) => d.primary),
    allTert = dataset.map((d) => d.tertiary);
  const xDomain = [
    Math.min(0.55, d3.min(allPrim) - 0.06),
    Math.max(1.45, d3.max(allPrim) + 0.06),
  ];
  const yDomain = [
    Math.min(0.2, d3.min(allTert) - 0.08),
    Math.max(1.7, d3.max(allTert) + 0.08),
  ];

  const xScale = d3.scaleLinear().domain(xDomain).range([0, iw]);
  const yScale = d3.scaleLinear().domain(yDomain).range([ih, 0]);
  const colorScale = d3
    .scaleDiverging(d3.interpolateRdBu)
    .domain([0.4, 1.0, 1.7]);

  addXYGrid(chartArea, xScale, yScale, iw, ih, 6, 6);

  chartArea
    .append("rect")
    .attr("x", xScale(0.96))
    .attr("y", yScale(1.04))
    .attr("width", Math.max(0, xScale(1.04) - xScale(0.96)))
    .attr("height", Math.max(0, yScale(0.96) - yScale(1.04)))
    .attr("fill", "#3b82f6")
    .attr("opacity", 0.08);

  chartArea
    .append("line")
    .attr("x1", xScale(1))
    .attr("x2", xScale(1))
    .attr("y1", 0)
    .attr("y2", ih)
    .attr("stroke", "#475569")
    .attr("stroke-dasharray", "6,4")
    .attr("stroke-width", 1.4);
  chartArea
    .append("line")
    .attr("x1", 0)
    .attr("x2", iw)
    .attr("y1", yScale(1))
    .attr("y2", yScale(1))
    .attr("stroke", "#475569")
    .attr("stroke-dasharray", "6,4")
    .attr("stroke-width", 1.4);

  chartArea
    .append("text")
    .attr("x", xScale(1) + 8)
    .attr("y", yScale(1) - 8)
    .style("font-size", "11px")
    .style("font-weight", "700")
    .style("fill", "#475569")
    .text("GPI = 1 平衡线");

  // 更新坐标轴样式
  chartArea
    .append("g")
    .attr("transform", `translate(0,${ih})`)
    .call(
      d3
        .axisBottom(xScale)
        .ticks(6)
        .tickFormat((d) => d.toFixed(2)),
    )
    .call(styleAxis);
  chartArea
    .append("g")
    .call(
      d3
        .axisLeft(yScale)
        .ticks(6)
        .tickFormat((d) => d.toFixed(2)),
    )
    .call(styleAxis);

  chartArea
    .append("text")
    .attr("x", iw / 2)
    .attr("y", ih + 42)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "#64748b")
    .text("小学阶段 GPI（女孩/男孩）");
  chartArea
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -ih / 2)
    .attr("y", -48)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "#64748b")
    .text("高等教育 GPI（女孩/男孩）");

  // 渲染点
  chartArea
    .selectAll(".gpi-point")
    .data(dataset, (d) => d.code)
    .enter()
    .append("circle")
    .attr("class", "gpi-point")
    .attr("cx", xScale(1))
    .attr("cy", yScale(1))
    .attr("r", 6)
    .attr("fill", (d) => colorScale(d.tertiary))
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.2)
    .style("opacity", 0.82)
    .on("mouseover", function (ev, d) {
      d3.select(this)
        .attr("r", 10)
        .attr("fill", "#f97316")
        .attr("stroke", "#7c2d12")
        .attr("stroke-width", 2)
        .style("opacity", 1);
      showTooltip(
        ev,
        `<div style="font-weight:700;margin-bottom:4px">${d.name}</div><div>小学阶段 GPI：<span style="color:#60a5fa;font-weight:700">${d.primary.toFixed(3)}</span></div><div>高等教育 GPI：<span style="color:#f472b6;font-weight:700">${d.tertiary.toFixed(3)}</span></div>`,
      );
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", function (ev, d) {
      d3.select(this)
        .attr("r", 6)
        .attr("fill", colorScale(d.tertiary))
        .attr("stroke", "#fff")
        .attr("stroke-width", 1)
        .style("opacity", 0.78);
      hideTooltip();
    })
    .transition("intro")
    .duration(900)
    .ease(d3.easeCubicOut)
    .delay((d, i) => Math.min(i * 5, 500))
    .attr("cx", (d) => xScale(d.primary))
    .attr("cy", (d) => yScale(d.tertiary));
}

function renderTopic2(geoFeatures) {
  if (!geoFeatures) {
    document
      .querySelectorAll(
        "#topic2-vis-map, #topic2-vis-map-top10, #topic2-vis-butterfly, #topic2-vis-scatter",
      )
      .forEach((el) => {
        el.innerHTML =
          '<div class="chart-loading" style="color:#ef4444">数据加载失败</div>';
      });
    return;
  }
  renderTopic2MapChart(geoFeatures);
  renderTopic2ButterflyChart();
  renderTopic2ScatterChart();
  initStep3Interactions(geoFeatures);
}

function initStep3Interactions(geoFeatures) {
  const detailPanel = document.getElementById("topic2-vis-step3-detail");
  const closeBtn = document.getElementById("topic2-close-detail-btn");
  const step3Section = document.getElementById("topic2-step3");
  const basemapEl = document.getElementById("topic2-vis-step3-map");
  const promptBox = step3Section
    ? step3Section.querySelector(".step3-prompt")
    : null;
  if (!basemapEl) return;

  let promptDismissed = false;

  function hideStep3Prompt() {
    if (promptBox) promptBox.classList.add("is-hidden");
    basemapEl.classList.remove("dimmed");
  }

  const updateStep3Prompt = () => {
    if (!step3Section) return;
    const rect = step3Section.getBoundingClientRect();
    const shouldShowPrompt =
      rect.top < window.innerHeight * 0.4 && rect.bottom > 0;

    if (
      shouldShowPrompt &&
      !promptDismissed &&
      detailPanel.classList.contains("hidden")
    ) {
      basemapEl.classList.add("dimmed");
      if (promptBox) promptBox.classList.remove("is-hidden");
    } else {
      if (!promptDismissed && detailPanel.classList.contains("hidden")) {
        basemapEl.classList.remove("dimmed");
      }
      if (!shouldShowPrompt) {
        promptDismissed = false;
        if (promptBox) promptBox.classList.add("is-hidden");
      }
    }
  };
  window.addEventListener("scroll", updateStep3Prompt);
  updateStep3Prompt();

  document.addEventListener(
    "click",
    (ev) => {
      if (!promptBox || promptBox.classList.contains("is-hidden")) return;
      if (promptBox.contains(ev.target)) return;

      promptDismissed = true;
      hideStep3Prompt();
      ev.preventDefault();
      ev.stopPropagation();
    },
    true,
  );

  if (closeBtn)
    closeBtn.addEventListener("click", () => {
      detailPanel.classList.add("hidden");
      basemapEl.classList.remove("dimmed");
    });

  if (!geoFeatures || geoFeatures.length === 0) return;

  const W = window.innerWidth;
  const H = window.innerHeight;
  const baseSvg = d3
    .select(basemapEl)
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  const fc = { type: "FeatureCollection", features: geoFeatures };
  const mapPadding = Math.max(28, Math.min(W, H) * 0.045);
  const proj = d3.geoEqualEarth().fitExtent(
    [
      [mapPadding, mapPadding],
      [W - mapPadding, H - mapPadding],
    ],
    fc,
  );
  const path = d3.geoPath().projection(proj);

  baseSvg
    .append("rect")
    .attr("width", W)
    .attr("height", H)
    .attr("fill", "#d9eaf7");

  const latestMap = Topic2Store.step3MapLatest;
  const allVals = Array.from(latestMap.values()).filter((v) => !isNaN(v));
  const valMin = allVals.length ? d3.min(allVals) : 30;
  const valMax = allVals.length ? d3.max(allVals) : 100;

  const colorScale = d3
    .scaleSequential(d3.interpolateRdYlGn)
    .domain([valMin, valMax]);

  function codeOf(d) {
    return ISO_NUM_TO_A3[+d.id] || null;
  }

  const tooltip = d3.select("#global-tooltip");

  baseSvg
    .selectAll("path")
    .data(geoFeatures)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "#fff")
    .attr("stroke-width", 0.5)
    .attr("fill", (d) => {
      const code = codeOf(d);
      const val = code ? latestMap.get(code) : null;
      return val != null && !isNaN(val) ? colorScale(val) : "#d1d5db";
    })
    .style("cursor", (d) => {
      const code = codeOf(d);
      return code && Topic2Store.step3CompletionByCountry.has(code)
        ? "pointer"
        : "default";
    })
    .on("mouseover", function (ev, d) {
      d3.select(this).attr("stroke", "#1e293b").attr("stroke-width", 1.8);
      tooltip.style("opacity", "0");
    })
    .on("mouseout", function () {
      d3.select(this).attr("stroke", "#fff").attr("stroke-width", 0.5);
      tooltip.style("opacity", "0");
    })
    .on("click", function (ev, d) {
      const code = codeOf(d);
      if (!code || !Topic2Store.step3CompletionByCountry.has(code)) return;
      const name = getCountryName(code, code);
      document.getElementById("topic2-detail-country-title").textContent = name;
      detailPanel.classList.remove("hidden");
      basemapEl.classList.add("dimmed");
      tooltip.style("opacity", "0");
      renderCountryLineChart(code, name);
    });

  const legendW = 160,
    legendH = 12;
  const legendSel = d3
    .select(basemapEl)
    .append("div")
    .style("position", "absolute")
    .style("bottom", "22px")
    .style("left", "22px")
    .style("background", "rgba(255,255,255,0.88)")
    .style("border-radius", "8px")
    .style("padding", "10px 14px")
    .style("font-size", "11px")
    .style("color", "#475569")
    .style("box-shadow", "0 2px 8px rgba(0,0,0,0.08)");

  legendSel
    .append("div")
    .style("font-weight", "600")
    .style("margin-bottom", "5px")
    .text("小学完成率（最近一年，%）");

  const lSvg = legendSel
    .append("svg")
    .attr("width", legendW + 8)
    .attr("height", legendH + 4);
  const lgId = "step3-grad-" + Math.random().toString(36).slice(2, 6);
  const defs = lSvg.append("defs");
  const lg = defs
    .append("linearGradient")
    .attr("id", lgId)
    .attr("x1", "0%")
    .attr("x2", "100%");
  lg.append("stop").attr("offset", "0%").attr("stop-color", "#ef4444");
  lg.append("stop").attr("offset", "50%").attr("stop-color", "#facc15");
  lg.append("stop").attr("offset", "100%").attr("stop-color", "#22c55e");
  lSvg
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", legendW)
    .attr("height", legendH)
    .attr("rx", 5)
    .attr("fill", `url(#${lgId})`);

  legendSel
    .append("div")
    .style("display", "flex")
    .style("justify-content", "space-between")
    .style("font-size", "10px")
    .style("color", "#64748b")
    .style("width", legendW + "px")
    .html(
      `<span>${valMin.toFixed(0)}%</span><span style="color:#9ca3af">灰色=无数据</span><span>${valMax.toFixed(0)}%</span>`,
    );
  legendSel
    .append("div")
    .style("margin-top", "6px")
    .style("max-width", legendW + "px")
    .style("font-size", "10px")
    .style("line-height", "1.4")
    .style("color", "#64748b")
    .text("注：该指标可能超过 100%，不等同于真实毕业率。");
}

function renderCountryLineChart(countryCode, countryName) {
  const container = d3.select("#topic2-vis-line-chart");
  container.html("");

  const data = Topic2Store.step3CompletionByCountry.get(countryCode);
  if (!data) {
    container.append("div").attr("class", "chart-loading").text("暂无数据");
    return;
  }

  const {
    primaryTotal,
    primaryFemale,
    primaryMale,
    tertiaryTotal,
    tertiaryFemale,
    tertiaryMale,
  } = data;

  const ALL_SERIES = [
    {
      key: "pri-total",
      label: "小学完成率（总体）",
      data: primaryTotal,
      color: "#475569",
      dash: null,
      w: 2,
      dotThreshold: Infinity,
    },
    {
      key: "pri-female",
      label: "小学完成率（女）",
      data: primaryFemale,
      color: "#e11d48",
      dash: null,
      w: 2,
      dotThreshold: Infinity,
    },
    {
      key: "pri-male",
      label: "小学完成率（男）",
      data: primaryMale,
      color: "#2563eb",
      dash: null,
      w: 2,
      dotThreshold: Infinity,
    },
    {
      key: "ter-total",
      label: "高等教育完成率（总体）",
      data: tertiaryTotal,
      color: "#7c3aed",
      dash: "6,3",
      w: 2.5,
      dotThreshold: 8,
    },
    {
      key: "ter-female",
      label: "高等教育完成率（女）",
      data: tertiaryFemale,
      color: "#db2777",
      dash: "4,3",
      w: 2.2,
      dotThreshold: 8,
    },
    {
      key: "ter-male",
      label: "高等教育完成率（男）",
      data: tertiaryMale,
      color: "#0f766e",
      dash: "2,3",
      w: 2.2,
      dotThreshold: 8,
    },
  ].filter((s) => s.data.length > 0);

  if (ALL_SERIES.length === 0) {
    container
      .append("div")
      .attr("class", "chart-loading")
      .text("该国暂无完成率数据");
    return;
  }

  const node = container.node();
  const totalW = Math.max(node.getBoundingClientRect().width || 700, 420);
  const totalH = Math.max(node.getBoundingClientRect().height || 320, 260);
  const mg = { top: 18, right: 230, bottom: 48, left: 58 };
  const iW = totalW - mg.left - mg.right;
  const iH = totalH - mg.top - mg.bottom;

  const allPts = ALL_SERIES.flatMap((s) => s.data);
  const xExtent = d3.extent(allPts, (d) => d.year);
  const yRaw = d3.max(allPts, (d) => d.value);
  const yMax = Math.max(105, Math.min(140, yRaw * 1.08));
  const yMin = Math.max(0, d3.min(allPts, (d) => d.value) - 4);

  const xScale = d3.scaleLinear().domain(xExtent).range([0, iW]);
  const yScale = d3.scaleLinear().domain([yMin, yMax]).range([iH, 0]).nice();

  const svg = container
    .append("svg")
    .attr("width", totalW)
    .attr("height", totalH);
  const g = svg
    .append("g")
    .attr("transform", `translate(${mg.left},${mg.top})`);

  g.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${iH})`)
    .call(d3.axisBottom(xScale).ticks(8).tickSize(-iH).tickFormat(""))
    .call((ag) => ag.select(".domain").remove())
    .selectAll("line")
    .attr("stroke", "#f1f5f9")
    .attr("stroke-width", 1);
  g.append("g")
    .attr("class", "grid-y")
    .call(d3.axisLeft(yScale).ticks(6).tickSize(-iW).tickFormat(""))
    .call((ag) => ag.select(".domain").remove())
    .selectAll("line")
    .attr("stroke", "#f1f5f9")
    .attr("stroke-width", 1);

  g.append("g")
    .attr("transform", `translate(0,${iH})`)
    .call(d3.axisBottom(xScale).ticks(8).tickFormat(d3.format("d")))
    .call((ag) => {
      ag.selectAll("text").style("font-size", "10px").style("fill", "#64748b");
      ag.select(".domain").attr("stroke", "#e2e8f0");
    });
  g.append("g")
    .call(
      d3
        .axisLeft(yScale)
        .ticks(6)
        .tickFormat((d) => d + "%"),
    )
    .call((ag) => {
      ag.selectAll("text").style("font-size", "10px").style("fill", "#64748b");
      ag.select(".domain").attr("stroke", "#e2e8f0");
    });

  g.append("text")
    .attr("x", iW / 2)
    .attr("y", iH + 38)
    .attr("text-anchor", "middle")
    .style("font-size", "11px")
    .style("fill", "#94a3b8")
    .text("年份");
  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -iH / 2)
    .attr("y", -44)
    .attr("text-anchor", "middle")
    .style("font-size", "11px")
    .style("fill", "#94a3b8")
    .text("完成率 (%)");

  if (yMin < 100 && yMax > 85) {
    g.append("line")
      .attr("x1", 0)
      .attr("x2", iW)
      .attr("y1", yScale(100))
      .attr("y2", yScale(100))
      .attr("stroke", "#cbd5e1")
      .attr("stroke-dasharray", "5,4")
      .attr("stroke-width", 1.2);
    g.append("text")
      .attr("x", iW + 3)
      .attr("y", yScale(100) + 4)
      .style("font-size", "9px")
      .style("fill", "#94a3b8")
      .text("100%参考");
  }

  if (yScale.domain()[1] >= 130) {
    g.append("line")
      .attr("x1", 0)
      .attr("x2", iW)
      .attr("y1", yScale(130))
      .attr("y2", yScale(130))
      .attr("stroke", "#fca5a5")
      .attr("stroke-dasharray", "3,3")
      .attr("stroke-width", 1);
    g.append("text")
      .attr("x", iW + 3)
      .attr("y", yScale(130) + 4)
      .style("font-size", "9px")
      .style("fill", "#ef4444")
      .text("130%");
  }

  const lineGen = d3
    .line()
    .defined((d) => !isNaN(d.value))
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.value))
    .curve(d3.curveMonotoneX);

  const tooltip = d3.select("#global-tooltip");

  ALL_SERIES.forEach((s) => {
    g.append("path")
      .datum(s.data)
      .attr("fill", "none")
      .attr("stroke", s.color)
      .attr("stroke-width", s.w)
      .attr("stroke-dasharray", s.dash || null)
      .attr("stroke-linecap", "round")
      .attr("d", lineGen)
      .style("opacity", 0.9);

    if (s.data.length <= s.dotThreshold) {
      g.selectAll(`.dot-${s.key}`)
        .data(s.data)
        .enter()
        .append("circle")
        .attr("class", `dot-${s.key}`)
        .attr("cx", (d) => xScale(d.year))
        .attr("cy", (d) => yScale(d.value))
        .attr("r", 4)
        .attr("fill", s.color)
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .on("mouseover", function (ev, d) {
          tooltip
            .interrupt()
            .html(
              `<div style="font-weight:700;margin-bottom:4px">${s.label}</div>` +
                `<div>${d.year} 年：<span style="color:#fbbf24;font-weight:bold">${d.value.toFixed(1)}%</span></div>` +
                (d.value > 100
                  ? `<div style="font-size:11px;color:#cbd5e1;margin-top:4px">超过 100% 通常与超龄、留级或跨境生等统计口径有关</div>`
                  : ""),
            )
            .style("left", ev.clientX + 14 + "px")
            .style("top", ev.clientY - 10 + "px")
            .style("opacity", "1");
        })
        .on("mousemove", (ev) =>
          tooltip
            .style("left", ev.clientX + 14 + "px")
            .style("top", ev.clientY - 10 + "px"),
        )
        .on("mouseout", () => tooltip.style("opacity", "0"));
    }
  });

  const legendG = svg
    .append("g")
    .attr("transform", `translate(${mg.left + iW + 14},${mg.top + 4})`);
  ALL_SERIES.forEach((s, i) => {
    const row = legendG.append("g").attr("transform", `translate(0,${i * 26})`);
    row
      .append("line")
      .attr("x1", 0)
      .attr("x2", 22)
      .attr("y1", 9)
      .attr("y2", 9)
      .attr("stroke", s.color)
      .attr("stroke-width", s.w)
      .attr("stroke-dasharray", s.dash || null);
    row
      .append("text")
      .attr("x", 27)
      .attr("y", 13)
      .style("font-size", "10px")
      .style("fill", "#334155")
      .text(s.label);
  });

  const noteBaseY = ALL_SERIES.length * 26 + 18;
  legendG
    .append("text")
    .attr("x", 0)
    .attr("y", noteBaseY)
    .style("font-size", "10px")
    .style("fill", "#64748b")
    .text("小学完成率为代理指标");
  legendG
    .append("text")
    .attr("x", 0)
    .attr("y", noteBaseY + 15)
    .style("font-size", "10px")
    .style("fill", "#94a3b8")
    .text(">100% 多为结构性统计现象");

  const hasGap = primaryFemale.length > 0 && primaryMale.length > 0;
  if (hasGap) {
    const yr = xExtent[1];
    const fLast = primaryFemale.filter((d) => d.year === yr);
    const mLast = primaryMale.filter((d) => d.year === yr);
    if (fLast.length && mLast.length) {
      const gap = (fLast[0].value - mLast[0].value).toFixed(1);
      legendG
        .append("text")
        .attr("x", 0)
        .attr("y", noteBaseY + 40)
        .style("font-size", "10px")
        .style("fill", "#94a3b8")
        .text(`最新性别差异（女-男）：${gap > 0 ? "+" : ""}${gap}%`);
    }
  }
}

// ==================== 话题三：质量与成果 ====================
const Topic3Store = {
  data: [],
  currentHighlights: [],
  currentColorBy: "region",
  countryOptions: [],
  activeLegendGroup: null,
};

const DataLoader = (function () {
  const regionColors = {
    东亚: "#1e3a8a",
    欧洲: "#2563eb",
    美洲: "#0ea5e9",
    非洲: "#ef4444",
    南亚: "#7c3aed",
    东南亚: "#3b82f6",
    中东: "#06b6d4",
    欧亚: "#8b5cf6",
    大洋洲: "#f59e0b",
  };
  const incomeColors = {
    高收入: "#2563eb",
    中高收入: "#ff6b9d",
    中低收入: "#facc15",
    低收入: "#a78bfa",
  };

  async function loadCSV(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const text = await response.text();
    const lines = text.split("\n");
    const headers = lines[0].split(",");
    const result = [];
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const values = lines[i].split(",");
      const row = {};
      headers.forEach((header, idx) => {
        let value = values[idx] ? values[idx].trim() : "";
        if (
          header !== "country_name" &&
          header !== "region" &&
          header !== "income_level"
        ) {
          const num = parseFloat(value);
          if (!isNaN(num)) value = num;
        }
        row[header] = value;
      });
      result.push(row);
    }
    return result;
  }

  async function loadAllData() {
    try {
      const [povertyData, laysData, regionData] = await Promise.all([
        loadCSV("data/learning_poverty.csv"),
        loadCSV("data/lays.csv"),
        loadCSV("data/region_mapping.csv"),
      ]);

      const merged = [];
      for (const lays of laysData) {
        const poverty = povertyData.find(
          (p) => p.country_code === lays.country_code,
        );
        const region = regionData.find(
          (r) => r.country_code === lays.country_code,
        );

        if (poverty && lays.lays !== null) {
        merged.push({
          name: getCountryName(lays.country_code, lays.country_name),
          code: lays.country_code,
          poverty: poverty.poverty_rate,
          lays: lays.lays,
          region: region ? region.region : "其他",
          income: region ? region.income_level : "中低收入",
          poverty_year: poverty.year,
          lays_year: lays.year,
        });
      }
      }
      return merged;
    } catch (error) {
      console.error("数据加载失败:", error);
      return [];
    }
  }

  function getColor(colorBy, item) {
    return colorBy === "region"
      ? regionColors[item.region] || "#999"
      : incomeColors[item.income] || "#999";
  }

  return { loadAllData, getColor, regionColors, incomeColors };
})();

async function initTopic3() {
  try {
    Topic3Store.data = await DataLoader.loadAllData();
    renderTopic3Charts();
  } catch (err) {
    console.error("❌ 话题三数据加载失败:", err);
  }
}

function linearRegression(points) {
  const clean = points.filter(([x, y]) => !isNaN(x) && !isNaN(y));
  if (clean.length < 2) return null;
  const n = clean.length;
  const sumX = d3.sum(clean, (d) => d[0]);
  const sumY = d3.sum(clean, (d) => d[1]);
  const sumXY = d3.sum(clean, (d) => d[0] * d[1]);
  const sumXX = d3.sum(clean, (d) => d[0] * d[0]);
  const denom = n * sumXX - sumX * sumX;
  if (denom === 0) return null;
  const slope = (n * sumXY - sumX * sumY) / denom;
  const intercept = (sumY - slope * sumX) / n;
  return { slope, intercept };
}

function renderTopic3Charts() {
  const data = Topic3Store.data;
  if (!data || data.length === 0) return;

  const scatterContainer = d3.select("#topic3-scatter-chart");
  const barContainer = d3.select("#topic3-bar-chart");
  const legendContainer = d3.select("#topic3-legend");
  const selectEl = d3.select("#topic3-countrySelect");

  // 更新高亮国家（或地区）信息面板
  const highlightInfoEl = document.getElementById("topic3-highlight-info");
  if (Topic3Store.currentHighlights.length > 0) {
    const selectedCodes = Topic3Store.currentHighlights;
    const lastCode = selectedCodes[selectedCodes.length - 1];
    const latestCountry = data.find((d) => d.code === lastCode);
    if (latestCountry) {
      highlightInfoEl.style.display = "block";
      document.getElementById("topic3-highlight-name").textContent =
        latestCountry.name;
      document.getElementById("topic3-highlight-poverty").innerHTML =
        `学习贫困率: <span style="font-weight:700;color:#1a4d9e;">${latestCountry.poverty.toFixed(1)}%</span>`;
      document.getElementById("topic3-highlight-lays").innerHTML =
        `LAYS: <span style="font-weight:700;color:#1a4d9e;">${latestCountry.lays.toFixed(1)}</span>年`;
    } else {
      highlightInfoEl.style.display = "none";
    }
  } else {
    highlightInfoEl.style.display = "none";
  }

  scatterContainer.html("");
  barContainer.html("");
  legendContainer.html("");

  const scatterNode = scatterContainer.node();
  const barNode = barContainer.node();
  const scatterW = Math.max(scatterNode.getBoundingClientRect().width, 500);
  const scatterH = Math.max(scatterNode.getBoundingClientRect().height, 400);
  const barW = Math.max(barNode.getBoundingClientRect().width, 300);
  const barH = Math.max(barNode.getBoundingClientRect().height, 400);

  const margin = { top: 40, right: 30, bottom: 50, left: 60 };
  const sW = scatterW - margin.left - margin.right;
  const sH = scatterH - margin.top - margin.bottom;

  const sSvg = scatterContainer
    .append("svg")
    .attr("width", scatterW)
    .attr("height", scatterH);
  const sG = sSvg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const xScale = d3.scaleLinear().domain([0, 100]).range([0, sW]);
  const yScale = d3.scaleLinear().domain([0, 20]).range([sH, 0]);

  addXYGrid(sG, xScale, yScale, sW, sH, 5, 5);

  const regression = linearRegression(data.map((d) => [d.poverty, d.lays]));
  if (regression) {
    const x1 = 0;
    const x2 = 100;
    sG.append("line")
      .attr("x1", xScale(x1))
      .attr("x2", xScale(x2))
      .attr("y1", yScale(regression.slope * x1 + regression.intercept))
      .attr("y2", yScale(regression.slope * x2 + regression.intercept))
      .attr("stroke", "#102033")
      .attr("stroke-width", 1.4)
      .attr("stroke-dasharray", "6,4")
      .attr("opacity", 0.55);
  }

  sG.append("g")
    .attr("transform", `translate(0,${sH})`)
    .call(d3.axisBottom(xScale).ticks(5))
    .call(styleAxis);
  sG.append("g")
    .call(d3.axisLeft(yScale).ticks(5))
    .call(styleAxis);

  sG.append("text")
    .attr("x", sW / 2)
    .attr("y", sH + 35)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "#64748b")
    .text("学习贫困率 (%)");
  sG.append("text")
    .attr("x", -sH / 2)
    .attr("y", -45)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .style("font-size", "12px")
    .style("fill", "#64748b")
    .text("学习调整学年 (LAYS)");

  const legendItems =
    Topic3Store.currentColorBy === "region"
      ? Object.entries(DataLoader.regionColors)
      : Object.entries(DataLoader.incomeColors);
  if (
    Topic3Store.activeLegendGroup &&
    !legendItems.some(([label]) => label === Topic3Store.activeLegendGroup)
  ) {
    Topic3Store.activeLegendGroup = null;
  }

  const colorFn = (d) => DataLoader.getColor(Topic3Store.currentColorBy, d);
  const groupKey = Topic3Store.currentColorBy === "region" ? "region" : "income";
  const activeGroup = Topic3Store.activeLegendGroup;
  const isGroupActive = (d) => activeGroup && d[groupKey] === activeGroup;
  const isGroupDimmed = (d) => activeGroup && d[groupKey] !== activeGroup;

  sG.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d.poverty))
    .attr("cy", (d) => yScale(d.lays))
    .attr("r", (d) =>
      Topic3Store.currentHighlights.includes(d.code) ? 8 : isGroupActive(d) ? 6.5 : 5,
    )
    .attr("fill", colorFn)
    .attr("opacity", (d) =>
      Topic3Store.currentHighlights.includes(d.code) || isGroupActive(d)
        ? 1
        : isGroupDimmed(d)
          ? 0.14
          : 0.7,
    )
    .attr("stroke", (d) =>
      Topic3Store.currentHighlights.includes(d.code) || isGroupActive(d) ? "#102033" : "#fff",
    )
    .attr("stroke-width", (d) =>
      Topic3Store.currentHighlights.includes(d.code) ? 2 : isGroupActive(d) ? 1.4 : 1,
    )
    .on("mouseover", function (ev, d) {
      d3.select(this).attr("r", 8).attr("opacity", 1);
      showTooltip(
        ev,
        `<b>${d.name}</b><br>学习贫困率: ${d.poverty.toFixed(1)}%<br>LAYS: ${d.lays.toFixed(1)}年`,
      );
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", function (ev, d) {
      d3.select(this)
        .attr(
          "r",
          Topic3Store.currentHighlights.includes(d.code) ? 8 : isGroupActive(d) ? 6.5 : 5,
        )
        .attr(
          "opacity",
          Topic3Store.currentHighlights.includes(d.code) || isGroupActive(d)
            ? 1
            : isGroupDimmed(d)
              ? 0.14
              : 0.7,
        );
      hideTooltip();
    });

  const countries = Array.from(
    new Map(data.map((d) => [d.code, { code: d.code, name: d.name }])).values(),
  ).sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
  Topic3Store.countryOptions = countries;
  selectEl.html("");
  selectEl.append("option").attr("value", "").text("-- 选择国家（或地区） --");
  countries.forEach((c) => {
    const opt = selectEl.append("option").attr("value", c.code).text(c.name);
    if (Topic3Store.currentHighlights.includes(c.code)) {
      opt.attr("selected", "selected");
    }
  });
  updateTopic3CountrySearchInput();

  legendItems.forEach(([label, color]) => {
    const isActiveLegend = Topic3Store.activeLegendGroup === label;
    const item = legendContainer
      .append("div")
      .attr("class", `scatter-legend-item${isActiveLegend ? " is-active" : ""}`)
      .attr("role", "button")
      .attr("tabindex", "0")
      .attr("aria-pressed", isActiveLegend ? "true" : "false")
      .style("display", "flex")
      .style("align-items", "center")
      .style("margin-right", "20px")
      .style("cursor", "pointer")
      .style("opacity", Topic3Store.activeLegendGroup && !isActiveLegend ? 0.36 : 1)
      .on("click", () => {
        Topic3Store.activeLegendGroup =
          Topic3Store.activeLegendGroup === label ? null : label;
        renderTopic3Charts();
      })
      .on("keydown", (ev) => {
        if (ev.key !== "Enter" && ev.key !== " ") return;
        ev.preventDefault();
        Topic3Store.activeLegendGroup =
          Topic3Store.activeLegendGroup === label ? null : label;
        renderTopic3Charts();
      });
    item
      .append("div")
      .attr("class", "scatter-legend-dot")
      .style("width", "16px")
      .style("height", "16px")
      .style("background", color)
      .style("margin-right", "8px")
      .style("border-color", isActiveLegend ? "#102033" : "#ffffff");
    item
      .append("span")
      .style("font-size", "12px")
      .style("color", isActiveLegend ? "#102033" : "#64748b")
      .style("font-weight", isActiveLegend ? "800" : "650")
      .text(label);
  });

  const barMargin = { top: 30, right: 20, bottom: 30, left: 100 };
  const bW = barW - barMargin.left - barMargin.right;
  const bH = barH - barMargin.top - barMargin.bottom;

  const bSvg = barContainer
    .append("svg")
    .attr("width", barW)
    .attr("height", barH);
  const bG = bSvg
    .append("g")
    .attr("transform", `translate(${barMargin.left},${barMargin.top})`);

  let sortedData = [...data];
  sortedData.sort((a, b) =>
    document.getElementById("topic3-sortBy").value === "lays"
      ? b.lays - a.lays
      : b.poverty - a.poverty,
  );
  sortedData = sortedData.slice(0, 20);

  const bYScale = d3
    .scaleBand()
    .domain(sortedData.map((d) => d.name))
    .range([0, bH])
    .padding(0.2);
  const bXScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(sortedData, (d) =>
        document.getElementById("topic3-sortBy").value === "lays"
          ? d.lays
          : d.poverty,
      ) * 1.15,
    ])
    .range([0, bW]);

  bG.append("g")
    .attr("transform", `translate(0,${bH})`)
    .call(d3.axisBottom(bXScale).ticks(3))
    .call(styleAxis);
  bG.append("g")
    .call(d3.axisLeft(bYScale))
    .call(styleAxis);

  bG.selectAll("rect")
    .data(sortedData)
    .enter()
    .append("rect")
    .attr("y", (d) => bYScale(d.name))
    .attr("height", bYScale.bandwidth())
    .attr("x", 0)
    .attr("width", (d) =>
      bXScale(
        document.getElementById("topic3-sortBy").value === "lays"
          ? d.lays
          : d.poverty,
      ),
    )
    .attr("fill", colorFn)
    .attr("opacity", 0.8);

  bG.selectAll(".bar-value")
    .data(sortedData)
    .enter()
    .append("text")
    .attr("class", "bar-value")
    .attr("x", (d) =>
      bXScale(
        document.getElementById("topic3-sortBy").value === "lays"
          ? d.lays
          : d.poverty,
      ) + 5,
    )
    .attr("y", (d) => bYScale(d.name) + bYScale.bandwidth() / 2 + 3)
    .style("font-size", "9px")
    .style("font-weight", "700")
    .style("fill", "#102033")
    .text((d) =>
      document.getElementById("topic3-sortBy").value === "lays"
        ? d.lays.toFixed(1)
        : d.poverty.toFixed(1) + "%",
    );
}

function updateTopic3CountrySearchInput() {
  const input = document.getElementById("topic3-countrySearchInput");
  if (!input) return;
  const selectedNames = Topic3Store.countryOptions
    .filter((c) => Topic3Store.currentHighlights.includes(c.code))
    .map((c) => c.name);
  input.value = selectedNames.length > 0 ? selectedNames.join("，") : "";
}

function renderTopic3CountrySearchResults(query = "") {
  const resultsEl = document.getElementById("topic3-countrySearchResults");
  if (!resultsEl) return;

  const normalized = query.trim().toLowerCase();
  const options = Topic3Store.countryOptions
    .filter((c) => !normalized || c.name.toLowerCase().includes(normalized) || c.code.toLowerCase().includes(normalized));

  resultsEl.innerHTML = "";
  resultsEl.classList.remove("hidden");

  const clearBtn = document.createElement("button");
  clearBtn.type = "button";
  clearBtn.className = "country-search-option";
  clearBtn.textContent = "清除所有选择";
  clearBtn.addEventListener("mousedown", (ev) => {
    ev.preventDefault();
    selectTopic3Country("");
  });
  resultsEl.appendChild(clearBtn);

  if (options.length === 0) {
    const empty = document.createElement("div");
    empty.className = "country-search-empty";
    empty.textContent = "没有匹配国家（或地区）";
    resultsEl.appendChild(empty);
    return;
  }

  options.forEach((country) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className =
      "country-search-option" +
      (Topic3Store.currentHighlights.includes(country.code) ? " is-active" : "");
    btn.textContent = country.name;
    btn.addEventListener("mousedown", (ev) => {
      ev.preventDefault();
      selectTopic3Country(country.code);
    });
    resultsEl.appendChild(btn);
  });
}

function selectTopic3Country(code) {
  const select = document.getElementById("topic3-countrySelect");
  const resultsEl = document.getElementById("topic3-countrySearchResults");
  if (!code) {
    Topic3Store.currentHighlights = [];
    if (resultsEl) resultsEl.classList.add("hidden");
  } else {
    const current = [...Topic3Store.currentHighlights];
    const index = current.indexOf(code);
    if (index >= 0) {
      current.splice(index, 1);
    } else {
      current.push(code);
    }
    Topic3Store.currentHighlights = current;
  }
  if (select) {
    Array.from(select.options).forEach((opt) => {
      opt.selected = Topic3Store.currentHighlights.includes(opt.value);
    });
  }
  updateTopic3CountrySearchInput();
  renderTopic3Charts();
}

function initTopic3CustomDropdowns() {
  const dropdownConfigs = [
    {
      dropdownId: "topic3-colorByDropdown",
      triggerId: "topic3-colorByTrigger",
      resultsId: "topic3-colorByResults",
      selectId: "topic3-colorBy",
      options: [
        { value: "region", label: "按地区分组" },
        { value: "income", label: "按收入水平分组" },
      ],
    },
    {
      dropdownId: "topic3-sortByDropdown",
      triggerId: "topic3-sortByTrigger",
      resultsId: "topic3-sortByResults",
      selectId: "topic3-sortBy",
      options: [
        { value: "lays", label: "按 LAYS 排序" },
        { value: "poverty", label: "按学习贫困率排序" },
      ],
    },
  ];

  function closeAllDropdowns() {
    dropdownConfigs.forEach((cfg) => {
      const resultsEl = document.getElementById(cfg.resultsId);
      const triggerEl = document.getElementById(cfg.triggerId);
      if (resultsEl) {
        resultsEl.classList.add("hidden");
      }
      if (triggerEl) {
        triggerEl.setAttribute("aria-expanded", "false");
      }
    });
  }

  dropdownConfigs.forEach((cfg) => {
    const dropdown = document.getElementById(cfg.dropdownId);
    const trigger = document.getElementById(cfg.triggerId);
    const resultsEl = document.getElementById(cfg.resultsId);
    const hiddenSelect = document.getElementById(cfg.selectId);
    if (!dropdown || !trigger || !resultsEl || !hiddenSelect) return;

    function getOptionLabel(value) {
      const option = cfg.options.find((item) => item.value === value);
      return option ? option.label : cfg.options[0].label;
    }

    function renderOptions() {
      resultsEl.innerHTML = "";
      cfg.options.forEach((item) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className =
          "dropdown-option" +
          (hiddenSelect.value === item.value ? " is-active" : "");
        button.textContent = item.label;
        button.dataset.value = item.value;
        button.addEventListener("mousedown", (ev) => {
          ev.preventDefault();
          hiddenSelect.value = item.value;
          trigger.textContent = item.label;
          closeAllDropdowns();
          hiddenSelect.dispatchEvent(new Event("change", { bubbles: true }));
          renderOptions();
        });
        resultsEl.appendChild(button);
      });
    }

    trigger.addEventListener("click", () => {
      const isHidden = resultsEl.classList.contains("hidden");
      closeAllDropdowns();
      if (isHidden) {
        resultsEl.classList.remove("hidden");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    renderOptions();

    if (!hiddenSelect.value) {
      hiddenSelect.value = cfg.options[0].value;
    }
    trigger.textContent = getOptionLabel(hiddenSelect.value);
  });

  document.addEventListener("mousedown", (ev) => {
    const target = ev.target;
    if (!target) return;
    const clickInsideAny = dropdownConfigs.some((cfg) => {
      const dropdown = document.getElementById(cfg.dropdownId);
      return dropdown && dropdown.contains(target);
    });
    if (!clickInsideAny) {
      closeAllDropdowns();
    }
  });
}

function initApp() {
  initScrollAnimations();
  initProgressBar();
  initNavigation();
  initSidebarToggle();
  initResponsiveChartLayout();
  initTopic3CustomDropdowns();

  loadTopic1Data().then(({ geoFeatures }) => {
    renderTopic1(geoFeatures);
  });

  loadTopic2Data().then(({ geoFeatures }) => {
    renderTopic2(geoFeatures);
  });

  initTopic3();
}

document.addEventListener("DOMContentLoaded", function () {
  initApp();
});

const topic3CountrySelect = document.getElementById("topic3-countrySelect");
if (topic3CountrySelect) {
  topic3CountrySelect.addEventListener("change", function (e) {
    const values = Array.from(e.target.selectedOptions)
      .map((opt) => opt.value)
      .filter(Boolean);
    Topic3Store.currentHighlights = values;
    renderTopic3Charts();
  });
}

const topic3CountrySearchInput = document.getElementById("topic3-countrySearchInput");
if (topic3CountrySearchInput) {
  topic3CountrySearchInput.addEventListener("focus", function (e) {
    renderTopic3CountrySearchResults(e.target.value);
  });
  topic3CountrySearchInput.addEventListener("click", function (e) {
    renderTopic3CountrySearchResults(e.target.value);
  });
  topic3CountrySearchInput.addEventListener("dblclick", function (e) {
    e.preventDefault();
    e.target.value = "";
    renderTopic3CountrySearchResults("");
  });
  topic3CountrySearchInput.addEventListener("input", function (e) {
    renderTopic3CountrySearchResults(e.target.value);
  });
  topic3CountrySearchInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.getElementById("topic3-countrySearchResults")?.classList.add("hidden");
      updateTopic3CountrySearchInput();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const first = document.querySelector("#topic3-countrySearchResults .country-search-option:not(:first-child)");
      if (first) first.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    }
  });
  document.addEventListener("mousedown", function (e) {
    const searchRoot = document.getElementById("topic3-countrySearch");
    if (!searchRoot || searchRoot.contains(e.target)) return;
    document.getElementById("topic3-countrySearchResults")?.classList.add("hidden");
    updateTopic3CountrySearchInput();
  });
}

const topic3ColorBy = document.getElementById("topic3-colorBy");
if (topic3ColorBy) {
  topic3ColorBy.addEventListener("change", function (e) {
    Topic3Store.currentColorBy = e.target.value;
    Topic3Store.activeLegendGroup = null;
    renderTopic3Charts();
  });
}

const topic3SortBy = document.getElementById("topic3-sortBy");
if (topic3SortBy) {
  topic3SortBy.addEventListener("change", function (e) {
    renderTopic3Charts();
  });
}
