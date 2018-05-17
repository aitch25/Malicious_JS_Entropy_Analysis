
/*
 ***** ACTIVE SUBDOMAINS
 * ***********************
 *
 * for the moment the following subdomains are active
 * file a pull request to add your own GitHub Page
 *
 *
 **** README
 * ***********
 *
 * KEY:         The subdomain you request (e.g.: "foo" would give the custom domain "foo.js.org").
 *
 * VALUE:       The regular domain provided by GitHub (e.g.: "foo.github.io" for a User-/Organization Page
 *              or "foo.github.io/bar" for a Project Page).
 *
 * CLOUDFLARE:  JS.ORG uses CloudFlare as its DNS. By default, CloudFlare proxies all requests to your subdomain
 *              to get SSL support (https://foo.js.org) and make use of browser caching with a TTL of 30 min.
 *              But you can opt-out from this and make Cloudflare forward all requests directly to GitHub.
 *              Just add '//noCF' in the line of your requested subdomain to give me a hint.
 *              (all the lines marked with '//noCF?' are from a time when a requester had to explicitly opt-in;
 *              see: https://github.com/js-org/dns.js.org/issues/554)
 *
 * IMPORTANT:   To authorize yourself as the owner of the GitHub Page you must have added a valid CNAME file
 *              (with the requested domain, e.g.: "foo.js.org") to your repository before the pull request.
 *              The requested subdomain must match either your GitHub username or the name of your project
 *              repository. Execeptions are possible for the sake of clarity (e.g. if your project has the
 *              name "foojs" you can request "foo").
 *              Before you start a request for your personal fork of "jquery" or "angular" you should read
 *              the section "naming conflicts" in the wiki!
 *
 * NOTICE:      It would be nice if you could keep the alphabetical order.
 *
 *              BECAUSE OF THE RISK OF ABUSE, I´M NOT ACCEPTING REQUESTS FOR PAGES WITHOUT REASONABLE CONTENT!
 */

var cnames_active = {
  "": "js-org.github.io",
  "100dayz": "deadcoder0904.github.io/100dayz",
  "101": "7anshuai.github.io/js101", // noCF? (don´t add this in a new PR)
  "19cah": "19cah.github.io/bio",
  "1c": "oknosoft.github.io/1c",
  "23chemistrycamp": "nchuchemistry.github.io/23chemistrycamp",
  "2tube": "you2php.github.io/you2php",
  "404": "licshee.github.io/404",
  "76": "hustcc.github.io/76",
  "7anshuai": "7anshuai.github.io", // noCF? (don´t add this in a new PR)
  "8art": "erayarslan.github.io/8art", // noCF? (don´t add this in a new PR)
  "98": "1j01.github.io/98",
  "abdalla": "the94air.github.io/abdalla",
  "abhishek": "rpidanny.github.io/personal-collage",
  "abialbon": "abialbon.github.io",
  "accordion": "awps.github.io/Accordion.JS",
  "acebooks": "mohamed0group.github.io/acebooks",
  "acegroup": "mohamed0group.github.io/acegroup",
  "acho": "achojs.github.io/acho",
  "acme": "makepost.github.io/acme-commander",
  "action-u": "kevinast.github.io/action-u",
  "active-resource": "nicklandgrebe.github.io/activeresource.js",
  "ada": "ada-js.netlify.com",
  "adon988": "adon988.github.io",
  "affiliate": "teamtofu.github.io/affiliate",
  "aghasemi": "aghasemi.github.io",
  "agrawalnaman": "agrawalnaman.github.io",
  "agrawalrohit": "rohit0803.github.io/agrawal.github.io",
  "ajaxable": "artf.github.io/ajaxable",
  "ajv": "epoberezkin.github.io/ajv",
  "akase": "cedmax.github.io/akase", // noCF? (don´t add this in a new PR)
  "akashacms": "akashacms.github.io", // noCF? (don´t add this in a new PR)
  "akshaybhalotia": "akshaybhalotia.github.io",
  "alasql": "alasql.github.io", // noCF? (don´t add this in a new PR)
  "alek": "alek-s.github.io",
  "algebra": "nicolewhite.github.io/algebra.js", // noCF? (don´t add this in a new PR)
  "alien": "pschroen.github.io/alien.js",
  "aligos": "aligos.github.io", // noCF? (don´t add this in a new PR)
  "all": "learnsomuch.github.io/all.js", // noCF? (don´t add this in a new PR)
  "almin": "almin.github.io",
  "alt": "goatslacker.github.io/alt", // noCF? (don´t add this in a new PR)
  "alveron": "rofrischmann.github.io/alveron",
  "amaple": "amjs-team.github.io/amaple",
  "andre": "caxvis.github.io",
  "anenth": "anenth.github.io", // noCF? (don´t add this in a new PR)
  "anggao": "anggao.github.io", // noCF? (don´t add this in a new PR)
  "angular-jsf": "json-schema-faker.github.io/angular-jsf", // noCF? (don´t add this in a new PR)
  "angular-uikit": "whoisjorge.github.io/angular-uikit",
  "angularstompdk": "davinkevin.github.io/AngularStompDK", // noCF? (don´t add this in a new PR)
  "animo": "thrivingkings.github.io/animo",
  "animorph": "claudiobmgrtnr.github.io/animorph",
  "ankithjoseph": "ankithjoseph.github.io",
  "annotate": "taitems.github.io/web-pdf-annotation", // noCF? (don´t add this in a new PR)
  "annoyingmouse": "annoyingmouse.github.io", // noCF? (don´t add this in a new PR)
  "antwar": "antwarjs.github.io/antwar",
  "anukul": "anukul.github.io",
  "api-spec": "api-spec.github.io", // noCF? (don´t add this in a new PR)
  "apicluster": "ramsunvtech.github.io/apicluster", // noCF? (don´t add this in a new PR)
  "aping": "johnnythetank.github.io/apiNG", // noCF? (don´t add this in a new PR)
  "aplayer": "diygod.github.io/APlayer",
  "apod": "marcosflorencio.github.io/angular-apod", // noCF? (don´t add this in a new PR)
  "applied": "omahajs.github.io/applied",
  "apr": "ramitos.github.io/apr",
  "arc": "diegohaz.github.io/arc",
  "argo": "albertosantini.github.io/argo", // noCF? (don´t add this in a new PR)
  "arime": "ninbryan.github.io/arime", // noCF? (don´t add this in a new PR)
  "artery": "arteryjs.github.io/gh-pages", // noCF? (don´t add this in a new PR)
  "ass": "weizhenye.github.io/ASS",
  "ast": "kindy.github.io/ast",
  "astral": "espinielli.github.io/astraljs", // noCF? (don´t add this in a new PR)
  "astrobench": "kupriyanenko.github.io/astrobench", // noCF? (don´t add this in a new PR)
  "astx-redux-util": "kevinast.github.io/astx-redux-util",
  "async-af": "asyncaf.github.io/AsyncAF",
  "atavic": "atavic.github.io",
  "atombundles": "lirantal.github.io/atombundles",
  "audio-cat": "tporl.github.io/audio-cat",
  "autodocs": "bguiz.github.io/autodocs", // noCF? (don´t add this in a new PR)
  "automic": "automicjs.github.io",
  "avi": "avinassh.github.io/avi", // noCF? (don´t add this in a new PR)
  "avner": "avnerus.github.io", // noCF? (don´t add this in a new PR)
  "awal": "awalGarg.github.io", // noCF? (don´t add this in a new PR)
  "awesomefeed": "arojunior.github.io/awesome-feed",
  "awesomehub": "awesomehub.netlify.com",
  "awk": "42ua.github.io/awk",
  "awoo": "awoojs.github.io/website",
  "azdanov": "azdanov.github.io",
  "backlog": "backlog-js.github.io/backlog.js.org", // noCF? (don´t add this in a new PR)
  "backstage": "backstagejs.github.io/backstage",
  "badger": "just-glue-it.github.io/badger", // noCF? (don´t add this in a new PR)
  "badrudeen": "badrudeen.github.io", // noCF? (don´t add this in a new PR)
  "bali": "balijs.github.io",
  "bancho": "thepoon.github.io/bancho.js",
  "bandung": "zufrizalyordan.github.io/bandungjs",
  "barbagrigia": "barbagrigia.github.io",
  "barcelona": "barcelona-js.github.io/website", // noCF? (don´t add this in a new PR)
  "base64": "licshee.github.io/base64",
  "bash": "bashjs.github.io",
  "basicgame": "basicgame.github.io/basicGame.js", // noCF? (don´t add this in a new PR)
  "bastion": "snkrsnkampa.github.io/Bastion-Site",
  "batch-cluster": "mceachen.github.io/batch-cluster.js",
  "battlerite": "dragory.github.io/battlerite.js",
  "bbn": "jammer99.github.io/bbn",
  "bc": "mazko.github.io/bc.js",
  "be": "davidep87.github.io/bejs.github.io",
  "begin": "advanced-webapps-class.github.io/begin", // noCF? (don´t add this in a new PR)
  "besafe": "ma124.github.io/BeSafe",
  "bestof": "michaelrambeau.github.io/bestofjs",
  "bicbacboe":"bicbacboe.github.io/Bic-Bac-Boe",
  "bildepunkt": "bildepunkt.github.io", // noCF? (don´t add this in a new PR)
  "bind-action-dispatchers": "cchamberlain.github.io/bind-action-dispatchers", // noCF? (don´t add this in a new PR)
  "biu": "aprilorange.github.io/biu", // noCF? (don´t add this in a new PR)
  "blessmyrains": "dusterthefirst.github.io/blessmyrains",
  "blogpage": "zanseven007.github.io/blog-page", // noCF
  "bloomer": "algusdark.github.io/bloomer",
  "blotter": "bradley.github.io/Blotter",
  "bob": "bhamblok.github.io",
  "bodybuilder": "danpaz.github.io/bodybuilder", // noCF? (don´t add this in a new PR)
  "boiler":"ro0t.github.com/Boiler",
  "boilerplates":"ckgrafico.github.io/frontend-boilerplates",
  "bombsweeper": "pakastin.github.io/bombsweeper",
  "bonzibuddy": "fardindadev.github.io/bonzibuddy",
  "bool": "booljs.github.io",
  "booru": "atlasthebot.github.io/booru",
  "bootstrap-confirmation": "mistic100.github.io/Bootstrap-Confirmation", // noCF? (don´t add this in a new PR)
  "bootstrap-validate": "pascalebeier.github.io/bootstrap-validate",
  "bootstrap-vue": "bootstrap-vue.github.io",
  "bornaeon": "bornaeon.github.io", // noCF
  "botgram": "botgram.github.io/botgram",
  "bottender": "bottenderjs.github.io",
  "boundless": "enigma-io.github.io/boundless",
  "bowmanmc": "bowmanmc.github.io",
  "box": "capacitorset.github.io/box-js", // noCF
  "bplayer": "classicoldsong.github.io/bPlayer", // noCF? (don´t add this in a new PR)
  "brain": "brainjs.github.io/brain.js",
  "brandifyjs": "greybax.github.io/brandifyjs",
  "brandonmerritt": "brandonmerritt.github.io", // noCF? (don´t add this in a new PR)
  "braxit": "braxit.github.io", // noCF? (don´t add this in a new PR)
  "brexit-regrets": "adebounam.github.io/brexit-regrets", // noCF? (don´t add this in a new PR)
  "bricklayer": "ademilter.github.io/bricklayer", // noCF? (don´t add this in a new PR)
  "bris": "brisjs.github.io",
  "browserless": "kikobeats.github.io/browserless",
  "brum": "brumjs.github.io", // noCF? (don´t add this in a new PR)
  "btgprice": "beeyev.github.io/btgprice.org",
  "bunjil":"bunjil.netlify.com",
  "bunyan-fork": "cchamberlain.github.io/bunyan-fork", // noCF? (don´t add this in a new PR)
  "bunyan-pmx": "cchamberlain.github.io/bunyan-pmx", // noCF? (don´t add this in a new PR)
  "bunyan-serializer": "cchamberlain.github.io/bunyan-serializer", // noCF? (don´t add this in a new PR)
  "burst": "hugeen.github.io/burst", // noCF? (don´t add this in a new PR)
  "bustime": "agarzola.github.io/bustime", // noCF? (don´t add this in a new PR)
  "buttermilk": "buttermilk.netlify.com",
  "c-3po": "c-3po-org.github.io/c-3po",
  "cable": "whatgoodisaroad.github.io/cablejs", // noCF? (don´t add this in a new PR)
  "cac": "cac.netlify.com"
  "caffeine": "ccrraaiigg.github.io/caffeine",
  "cagatay": "cagataycali.github.io",
  "calcy": "odevlord.github.io/Calcy", // noCF? (don´t add this in a new PR)
  "calendarios": "helpdev.github.io/Calendarios", // noCF? (don´t add this in a new PR)
  "candy": "candy02058912.github.io/portfolio",
  "candyland": "candyland-js.github.io/candyland",
  "candyref": "bbyjins.github.io/candy",
  "cans": "djyde.github.io/cans", // noCF
  "canvas": "anshuman-verma.github.io/canvas",
  "canvasconstructor": "kyranet.github.io/canvasConstructor",
  "capital": "capitaljs.github.io/capitaljs",
  "capsid": "capsidjs.github.io/capsid",
  "capsule": "capsule-js-org.github.io/capsule",
  "cardtabs": "blekerfeld.github.io/CardTabs",
  "cargo": "herber.github.io/cargo",
  "carloseduardo": "karllossouza.github.io/carloseduardo.js.org",
  "cartodb-demo": "opensas.github.io/cartodb-demo", // noCF? (don´t add this in a new PR)
  "cassie": "milesgitgud.github.io/cassie",
  "cats": "whoisjorge.github.io/not-cat-gifs",
  "central-node": "central-node.github.io", // noCF? (don´t add this in a new PR)
  "chain-able": "fluents.github.io/chain-able-site",
  "chatexchange": "jacob-gray.github.io/ChatExchangeJS",
  "checklist": "hellogreg.github.io/checklist",
  "cheerio": "cheeriojs.github.io/cheerio",
  "chernivtsi": "chernivtsijs.github.io",
  "chimon2000": "chimon2000.github.io", // noCF? (don´t add this in a new PR)
  "chinaw3c": "chinaw3c.github.io",
  "chirashi": "chirashijs.github.io/chirashi",
  "chordthing": "ifons42.github.io/chordthing",
  "chrislaughlin": "chrislaughlin.github.io", // noCF? (don´t add this in a new PR)
  "chrismendis": "chrismendis.github.io", // noCF? (don´t add this in a new PR)
  "christo": "christoga.github.io/js-org", // noCF? (don´t add this in a new PR)
  "chronos": "espinielli.github.io/chronos", // noCF? (don´t add this in a new PR)
  "cineasta": "cineasta-js.github.io/cineasta-docs",
  "citation": "larsgw.github.io/citation.js",
  "city": "city.github.io",
  "ck": "cikai.github.io/blog",
  "clark": "clarkdo.github.io/new-blog",
  "clarkdo": "clarkdo.github.io",
  "clause": "clausejs.github.io/clausejs",
  "clevercord": "theanidox.github.io/Clevercord",
  "clockwork": "clockworkdev.github.io/ClockworkWebsite",
  "clusterize": "nexts.github.io/Clusterize.js",
  "cmbhackjs2013": "cmbjs.github.io/cmbHackjs2013",
  "cmdhub": "thatonetqnk.github.io/cmdhub",
  "cn.iflow": "unadlib.github.io/iflow-docs-cn",
  "cn.mobx": "sangka.github.io/mobx-docs-cn", // noCF
  "cn.redux": "camsong.github.io/redux-in-chinese", // noCF? (don´t add this in a new PR)
  "cn.rx": "rxjs-cn.github.io/RxJS-Docs-CN", // noCF
  "cnc": "cncjs.github.io/cncjs.org",
  "codemade": "codemade.github.io", // noCF? (don´t add this in a new PR)
  "codepan": "egoist.github.io/codepan",
  "codux": "tannerlinsley.github.io/codux",
  "coffea": "caffeinery.github.io/coffea",
  "collegequest": "schoolhouserock.github.io/CollegeQuest", // noCF? (don´t add this in a new PR)
  "colombo": "cmbjs.github.io/CMBJS",
  "comixngn": "seun40.github.io/comix-ngn", // noCF? (don´t add this in a new PR)
  "commandfox": "commandfox.github.io/mc-tools", // noCF? (don´t add this in a new PR)
  "community.luxaura": "trikel.paradox.cloud", //noCF
  "community.os": "js.bydiscourse.com", // noCF? (don´t add this in a new PR)
  "concursos": "mteyss.github.io/concursos", // noCF? (don´t add this in a new PR)
  "conductor": "hosting.gitbook.com",
  "construyendotrabajo": "mteyss.github.io/construyendotrabajo", // noCF? (don´t add this in a new PR)
  "consultant": "jense5.github.io/consultant",
  "contextify": "abemedia.github.io/jquery-contextify", // noCF? (don´t add this in a new PR)
  "coord": "itsacorn.github.io/jscoord",
  "cordova-multiplatform-template": "ckgrafico.github.io/Cordova-Multiplatform-Template", // noCF? (don´t add this in a new PR)
  "cork": "davej.github.io/CorkJS",
  "cote": "dashersw.github.io/cote", // noCF? (don´t add this in a new PR)
  "country": "growmies.github.io/countryjs", // noCF? (don´t add this in a new PR)
  "cplayer": "copay.github.io/cPlayer",
  "cqrs": "adrai.github.io/cqrs", // noCF? (don´t add this in a new PR)
  "cr": "echosoar.github.io/cr",
  "cracked": "billorcutt.github.io/Cracked",
  "createrest": "atomixinteractions.github.io/createrest",
  "crownstudios": "razod.github.io/crownstudios",
  "crunch": "vukicevic.github.io/crunch", // noCF? (don´t add this in a new PR)
  "cryptokey": "rumkin.github.com/crypto-key",
  "cucumber-mink": "adezandee.github.io/cucumber-mink", // noCF? (don´t add this in a new PR)
  "curi": "pshrmn.github.io/curi",
  "curseapp": "mcrocks999.github.io/curseapp.js",
  "cybernaut": "clebert.github.io/cybernaut",
  "cycle": "cyclejs.github.io",
  "cyclow": "pmros.github.io/cyclow", // noCF
  "d4": "joelburget.github.io/d4",
  "damo": "damodharanj.github.io",
  "danmaku": "weizhenye.github.io/Danmaku",
  "danmol": "dan12mol.github.io", // noCF? (don´t add this in a new PR)
  "danieljuarezp": "danieljuarezp.github.io",
  "dataclass": "alexeyraspopov.github.io/dataclass",
  "datastructures": "deadcoder0904.github.io/datastructures",
  "date": "matthewmueller.github.io/date", // noCF? (don´t add this in a new PR)
  "davidtaylorjr": "davidtaylorjr.github.io",
  "daysfromnow": "pedrokost.github.io/daysfromnow", // noCF? (don´t add this in a new PR)
  "dbo": "z3ta.github.io/dbo", // noCF? (don´t add this in a new PR)
  "deck-of-cards": "pakastin.github.io/deck-of-cards",
  "deepu": "deepu105.github.io",
  "defi": "finom.github.io/defi.js.org",
  "delegacias-fortaleza": "juliosampaio.github.io/delegacias-fortaleza", // noCF? (don´t add this in a new PR)
  "delet": "ds-development.github.io/delet",
  "denisvieira": "fromdenisvieira.github.io", // noCF? (don´t add this in a new PR)
  "deputy": "ry4nolson.github.io/Deputy", // noCF? (don´t add this in a new PR)
  "detect-resize": "noderaider.github.io/detect-resize", // noCF? (don´t add this in a new PR)
  "detector": "blackmirror1980.github.io/detector-js",
  "deterministic": "nodeguy.github.io/Deterministic.js",
  "devlog": "cdrrazan.github.io/devlog.js.org",
  "dgelong": "alexeyraspopov.github.io/dgelong", // noCF? (don´t add this in a new PR)
  "dhruvdutt": "dhruvdutt.github.io",
  "diamond": "diamondpkg.github.io/website",
  "dice": "dicediscord.netlify.com",
  "dickbutt": "xpde.github.io/dickbutt",
  "diffract": "ameyms.github.io/diffract", // noCF? (don´t add this in a new PR)
  "dinesh": "dineshondev.github.io/dinesh", // noCF? (don´t add this in a new PR)
  "dio": "thysultan.github.io/dio.js",
  "discord": "discordjs.github.io/website",
  "discunit": "megacode18.github.io/discunit.js"
  "display": "arguiot.github.io/DisplayJS",
  "distillery": "achannarasappa.github.io/distillery", // noCF? (don´t add this in a new PR)
  "distri": "flarp.github.io/Distri.js",
  "distribution": "distributionjs.github.io/website",
  "djsbasics": "djsbasics.gitlab.io/mkdocs",
  "djvu": "russcoder.github.io/djvujs",
  "djzhao": "djzhao627.github.io",
  "dmitry": "dmitry-zaets.github.io",
  "dns": "js-org.github.io/dns.js.org",
  "docile": "teamtofu.github.io/docile",
  "docsify": "QingWei-Li.github.io/docsify",
  "documentation": "documentationjs.github.io", // noCF? (don´t add this in a new PR)
  "docute": "egoist.github.io/docute",
  "dodec-design": "dodec-design.github.io",
  "dogstack": "dogstack.gitbooks.io/handbook", // noCF
  "dolphin": "uyouthe.github.io/dolphin",
  "domtastic": "webpro.github.io/DOMtastic",
  "donavon": "donavon.github.io", // noCF? (don´t add this in a new PR)
  "dope": "fouad.github.io/dope", // noCF? (don´t add this in a new PR)
  "doz": "dozjs.github.io/website",
  "dplayer": "diygod.github.io/DPlayer", // noCF
  "dprof": "andreasmadsen.github.io/dprof",
  "draft": "D1SC0tech.github.io/draft.js", // noCF? (don´t add this in a new PR)
  "drag": "classicoldsong.github.io/Drag.js", // noCF? (don´t add this in a new PR)
  "dragon": "sabertazimi.github.io/dragonjs", // noCF? (don´t add this in a new PR)
  "draw": "skillzzjesse.github.io/draw",
  "du": "ruanyl.github.io/du", // noCF? (don´t add this in a new PR)
  "dualcyclone": "dualcyclone.github.io/postit-todo-react-redux",
  "duffn": "duffn.github.io", // noCF? (don´t add this in a new PR)
  "dunedin": "dunedinjs.github.io",
  "dungeon": "youssefelshemi.github.io/dungeon.js"
  "dutchakdev": "dutchakdev.github.io", // noCF? (don´t add this in a new PR)
  "dynaflo": "trevorhanus.github.io/dynaflo",
  "dynamicsnode": "crisfervil.github.io/DynamicsNode",
  "eahmed234": "eahmed234.github.io",
  "ed2k": "sunnyli.github.io/ed2k.js",
  "ef": "classicoldsong.github.io/ef.js.org",
  "effectful": "awto.github.io/effectfuljs",
  "elastic-builder": "sudo-suhas.github.io/elastic-builder",
  "elementnet": "elementnet.github.io",
  "elf": "mytharcher.github.io/elf.js.org", // noCF? (don´t add this in a new PR)
  "elliot": "elliotboney.github.io", // noCF? (don´t add this in a new PR)
  "elmo": "lap00zza.github.io/elmo",
  "elock": "yourtion.github.io/node-elock",
  "email-templates": "niftylettuce.github.io/email-templates",
  "embedlam": "wnda.github.io/embedlam",
  "ember-cli-page-object": "san650.github.io/ember-cli-page-object", // noCF? (don´t add this in a new PR)
  "ember-electron": "felixrieseberg.github.io/ember-electron",
  "emeraldcraftmc": "emeraldcraftmc.github.io", // noCF? (don´t add this in a new PR)
  "emoji": "egoist.github.io/emoji",
  "emojipanel": "danbovey.github.io/EmojiPanel",
  "emulisp": "grahack.github.io/EmuLisp", // noCF? (don´t add this in a new PR)
  "enclave": "eanplatter.github.io/enclave", // noCF? (don´t add this in a new PR)
  "energy": "energychain.github.io/energy",
  "engui": "engui.github.io",
  "eq8": "eq8.github.io",
  "eray": "erayarslan.github.io", // noCF? (don´t add this in a new PR)
  "erest": "yourtion.github.io/node-erest",
  "eric": "otteric.github.com",
  "erik": "erikroyall.github.com", // noCF? (don´t add this in a new PR)
  "erikng": "eriknguyen.github.io",
  "es.redux": "sergiodxa.github.io/redux-in-spanish", // noCF? (don´t add this in a new PR)
  "es2015-node": "martinheidegger.github.io/es6modules-nodejs", // noCF? (don´t add this in a new PR)
  "es6-module-seed": "blackmirror1980.github.io/es6-module-seed",
  "es6-tween": "tweenjs.github.io/es6-tween",
  "escape": "licshee.github.io/Escape.js", // noCF? (don´t add this in a new PR)
  "esper": "codecombat.github.io/esper.js",
  "euc": "wnda.github.io/euc",
  "euclid": "anandthakker.github.io/euclid", // noCF? (don´t add this in a new PR)
  "eval": "jshawl.github.io/eval", // noCF? (don´t add this in a new PR)
  "event-storage": "albe.github.io/node-event-storage",
  "eventstore": "adrai.github.io/node-eventstore", // noCF? (don´t add this in a new PR)
  "evolutions": "anshumanv.github.io/evolutions-webapp",
  "exbars": "youssefkababe.github.io/exbars", // noCF? (don´t add this in a new PR)
  "exiftool-vendored": "mceachen.github.io/exiftool-vendored.js",
  "exp": "majid-akbari.github.io/JQuery-expression-builder",
  "express-saml2": "tngan.github.io/express-saml2",
  "extenso": "theuves.github.io/extenso.js.org",
  "extraction": "rse.github.io/extraction", // noCF? (don´t add this in a new PR)
  "eye": "arguiot.github.io/EyeJS",
  "facepalm": "santiagogil.github.io/facepalm",
  "fan": "garychamberlain.github.io/fan",
  "fantas": "fantastiser.github.io",
  "farfetchd": "achannarasappa.github.io/farfetchd", // noCF? (don´t add this in a new PR)
  "fariz": "farizdev.github.io/fariz",
  "faucet": "faucetjs.github.io",
  "faux": "fauxOS.github.io",
  "fcbosque": "cronopio.github.io/fcbosque", // noCF? (don´t add this in a new PR)
  "feature-u": "kevinast.github.io/feature-u",
  "feeble": "feeblejs.github.io/feeble",
  "fela": "rofrischmann.github.io/fela", // noCF? (don´t add this in a new PR)
  "festercluck": "festercluck.github.io", // noCF? (don´t add this in a new PR)
  "fidel": "fidelxyz.github.io",
  "filehub": "minegamer5570.github.io/Filehub",
  "filer": "filerjs.github.io/filer",
  "filter": "filterjs.github.io/docs",
  "finder": "applait.github.io/finderjs", // noCF? (don´t add this in a new PR)
  "fire-hydrant": "cchamberlain.github.io/fire-hydrant", // noCF? (don´t add this in a new PR)
  "firenze": "fahad19.github.io/firenze", // noCF? (don´t add this in a new PR)
  "fis": "fex-team.github.io/fis-site", // noCF? (don´t add this in a new PR)
  "five": "jackdcrawford.github.io/five",
  "flatpickr": "flatpickr.github.io",
  "flavor": "blackmirror1980.github.io/flavor-js",
  "fld-grd": "mrksbnch.github.io/fld-grd",
  "flexmasonry": "kavanmevada.github.io/flex_masonry", // noCF
  "flowchart": "adrai.github.io/flowchart.js", // noCF? (don´t add this in a new PR)
  "flowcon": "oknosoft.github.io/flowcon",
  "fluid": "jottocraft.github.io/fluid",
  "fluxoff": "kingscott.github.io/flux-off", // noCF? (don´t add this in a new PR)
  "flybook": "rhiokim.github.io/flybook",
  "fnx": "fnxjs.gitbooks.io/fnx-documentation",
  "food": "teamtofu.github.io/foodweb",
  "form": "the94air.github.io/formjs",
  "formred": "zewish.github.io/formred",
  "fortune": "fortunejs.github.io/fortune", // noCF? (don´t add this in a new PR)
  "foxify": "foxifyjs.github.io/foxify",
  "foxman": "kaola-fed.github.io/foxman",
  "freemarker": "ijse.github.io/freemarker.js", // noCF? (don´t add this in a new PR)
  "freezer": "pakastin.github.io/freezer",
  "frint": "frintjs.github.io/frint.js.org",
  "fritzbox": "lesander.github.io/fritzbox.js",
  "front-end": "whoisjorge.github.io/front-end",
  "frzr": "pakastin.github.io/frzr",
  "fs-nextra": "bdistin.github.io/fs-nextra",
  "funbook": "egoist.github.io/funbook",
  "funfuncs": "floffah.github.io/funfuncs",
  "fyi": "tobihrbr.github.io/fyi",
  "g": "nodebox.github.io/g.js",
  "gal": "galmail.github.io", // noCF? (don´t add this in a new PR)
  "gamedevcontestal": "fromdenisvieira.github.io/gamedevcontestal", // noCF? (don´t add this in a new PR)
  "gazosekai": "starkblaze01.github.io/Gazo_Sekai",
  "gcse": "abemedia.github.io/jquery-gcse",
  "geekr": "ruanyl.github.io/geekr", // noCF? (don´t add this in a new PR)
  "genpasswd": "exos.github.io/genpasswd", // noCF? (don´t add this in a new PR)
  "getlink": "ilovecode1.github.io/linkjs", // noCF? (don´t add this in a new PR)
  "getpinkr": "getpinkr.github.io",
  "ghastly": "hkwu.github.io/ghastly",
  "ghsamm": "ghsamm.github.io", // noCF? (don´t add this in a new PR)
  "giant-piano": "moroshko.github.io/giant-piano", // noCF? (don´t add this in a new PR)
  "girls": "girls-js.github.io",
  "gka": "gkajs.github.io/gka",
  "glottologist": "arguiot.github.io/Glottologist",
  "godzm4tt3o": "godzm4tt3o.github.io",
  "gol": "goljs.github.io/GoL",
  "goodseller": "goodseller.github.io", // noCF? (don´t add this in a new PR)
  "gotanda": "gotandajs.github.io",
  "gottasurf": "jottocraft.github.io/surf",
  "gramps": "gramps-graphql.github.io/gramps",
  "graphics2d": "keyten.github.io/Graphics2D", // noCF? (don´t add this in a new PR)
  "graphstore": "besync.github.io/graphstore",
  "grapnel": "engineeringmode.github.io/Grapnel.js", // noCF? (don´t add this in a new PR)
  "greg": "gregorydgarcia.github.io", // noCF? (don´t add this in a new PR)
  "gregory": "f3z0.github.io",
  "grep": "42ua.github.io/grep",
  "gridiron": "noderaider.github.io/gridiron",
  "gridsplit": "assetinfo.github.io", // noCF? (don´t add this in a new PR)
  "gruft": "nikola.github.io/gruft", // noCF? (don´t add this in a new PR)
  "guillotine": "matiasgagliano.github.io/guillotine", // noCF? (don´t add this in a new PR)
  "guiseek": "guiseek.github.io", // noCF? (don´t add this in a new PR)
  "gully": "nmabhinandan.github.io/gully", // noCF? (don´t add this in a new PR)
  "gulp-skeleton": "mrdragonxm15.github.io/gulp-skeleton",
  "gulpkit": "gulpkit.github.io/GulpKit",
  "gun": "gundb.github.io", // noCF? (don´t add this in a new PR)
  "guppy": "daniel3735928559.github.io/guppy",
  "guuibayer": "guuibayer.github.io", // noCF? (don´t add this in a new PR)
  "gyps": "huijari.github.io/Gyps",
  "gyre": "wridder.github.io/GyreJS", // noCF? (don´t add this in a new PR)
  "gyx": "yourtion.github.io/gyx.js.org",
  "h": "makenowjust.github.io/h.js",
  "hack": "hack.netlify.com",
  "halil": "hibrahimsafak.github.io", // noCF? (don´t add this in a new PR)
  "haloapi": "derflatulator.github.io/haloapi.js", // noCF? (don´t add this in a new PR)
  "hapi-sol": "yonjah.github.io/hapi-sol",
  "happy": "e24.github.io/happy", // noCF? (don´t add this in a new PR)
  "hask": "janbiasi.github.io/hask", // noCF? (don´t add this in a new PR)
  "hay": "hayjs.github.io/hay.js.org",
  "heartseekers": "rajington.github.io/heartseekers", // noCF? (don´t add this in a new PR)
  "hello": "hello-js-org.github.io", // noCF? (don´t add this in a new PR)
  "hhao99": "hhao99.github.io",
  "hibiki": "claritymoe.github.io/hibiki",
  "hilo": "erikroyall.github.io/hilo", // noCF? (don´t add this in a new PR)
  "hk": "akura-co.github.io/hk", // noCF? (don´t add this in a new PR)
  "hoa": "thehoa.github.io",
  "hooloo": "hooloo.github.io", // noCF? (don´t add this in a new PR)
  "hub": "yyued.github.io/hub.js",
  "hubble": "hubble.netlify.com",
  "huck": "huckjs.github.io/huck",
  "human": "human-js.gitbooks.io", // noCF? (don´t add this in a new PR)
  "hxxbit": "hxxbit.github.io",
  "hyde": "gheek.github.io/hyde", // noCF? (don´t add this in a new PR)
  "hyf": "yafey.github.io",
  "hyperapp": "hyperapp.github.io",
  "hyperform": "hyperform.github.io",
  "i18n4v": "shibukawa.github.io/i18n4v",
  "iagrib": "iagrib.github.io",
  "icecast": "jucrouzet.github.io/icecast.js",
  "ienumerable": "mbasso.github.io/ienumerable",
  "iffe": "iffe-team.github.io",
  "iflow": "unadlib.github.io/iflow",
  "ignite": "ignitejscl.github.io",
  "igorsantana": "igorsantana.github.io", // noCF? (don´t add this in a new PR)
  "iio": "iioinc.github.io/iio.js", // noCF? (don´t add this in a new PR)
  "illuxi": "razod.github.io/illuxi",
  "imagecapture": "googlechrome.github.io/imagecapture-polyfill",
  "imcvampire": "imcvampire.github.io",
  "imeme": "svenmeister.github.io/imeme.js.org",
  "imgops": "dogancelik.github.io/imgops-multi",
  "immense": "immense.github.io", // noCF? (don´t add this in a new PR)
  "immybox": "immense.github.io/immybox", // noCF? (don´t add this in a new PR)
  "impress": "impress.github.io/impress.js",
  "infinite-tree": "cheton.github.io/infinite-tree",
  "initial-wu": "initial-wu.github.io",
  "injectify": "injectify.github.io/docs",
  "inline-style-prefixer": "rofrischmann.github.io/inline-style-prefixer",
  "inscriptum": "sumbad.github.io/inscriptum",
  "inset": "patlillis.github.io/inset.js",
  "instabousing": "jlbousing.github.io/instaBousing",
  "invoicing": "vahe.github.io/InvoicingJs",
  "iostream": "pantheonsh.github.io/iostream",
  "ip-address": "beaugunderson.github.io/ip-address", // noCF? (don´t add this in a new PR)
  "ipv4": "licshee.github.io/IPv4-CIDR-Prefix-Merger",
  "ir": "irjs.github.io/docs",
  "is": "arasatasaygin.github.io/is.js", // noCF? (don´t add this in a new PR)
  "ishan": "ishanthukral.github.io/ishan.js", // noCF? (don´t add this in a new PR)
  "isic": "isic.github.io/isic-docs",
  "islisp": "ta2gch.github.io/islisp.js.org",
  "istanbul": "istanbuljs.github.io",
  "italia": "milano-js.github.io/italia-js", // noCF? (don´t add this in a new PR)
  "itsashis4u": "itsashis4u.github.io", // noCF? (don´t add this in a new PR)
  "itunes-bridge": "angrykiller.github.io/iTunes-bridge",
  "ivml": "influencetech.github.io/ivml", // noCF? (don´t add this in a new PR)
  "j2p": "j2p.github.io", // noCF? (don´t add this in a new PR)
  "jacques": "jacquesmarais.github.io/jacques", // noCF? (don´t add this in a new PR)
  "jaibascript": "vasco3.github.io/jaibascript",
  "jakarta": "jakartajs.github.io/jakartajs", // noCF? (don´t add this in a new PR)
  "jakejarrett": "jakejarrett.github.io", // noCF? (don´t add this in a new PR)
  "jalbertbowden": "jalbertbowden.github.io", // noCF? (don´t add this in a new PR)
  "james": "jamesrowen.github.io/james", // noCF? (don´t add this in a new PR)
  "jargon": "hugogiraudel.github.io/SJSJ", // noCF? (don´t add this in a new PR)
  "javascript-kitchen": "jskitchen.github.io",
  "jbone": "kupriyanenko.github.io/jbone", // noCF? (don´t add this in a new PR)
  "jdc": "jdceeb.github.io",
  "jet": "alexanderbartels.github.io/jet-website",
  "jets": "nexts.github.io/Jets.js",
  "jinya": "chenjinya.github.io",
  "jjlc": "k-yak.github.io/JJLC", // noCF? (don´t add this in a new PR)
  "jk": "joname1.github.io",
  "jl":"jianglong1992.github.io",
  "jogja": "jogjajs.github.io", // noCF
  "john": "jozhn.github.io",
  "josep": "warlock.github.io",
  "josuedanielbust": "josuedanielbust.github.io", // noCF? (don´t add this in a new PR)
  "jparticles": "jparticles.github.io/Documentation",
  "jscord": "thepoptartcrpr.github.io/jscord",
  "jsessentials": "chetanraj.github.io/jsessentials",
  "jsnippet": "JesseEisen.github.io/snippets", // noCF
  "json-schema-faker": "json-schema-faker.github.io/website-jsf", // noCF? (don´t add this in a new PR)
  "jsonapi": "ethanresnick.github.io/json-api",
  "jsonuri": "aligay.github.io/jsonuri",
  "juancarlosqr": "juancarlosqr.github.io", // noCF? (don´t add this in a new PR)
  "julien": "julien.github.io", // noCF? (don´t add this in a new PR)
  "jumpsuit": "jumpsuit.github.io/jumpsuit",
  "junctions": "jamesknelson.github.io/junctions",
  "juno-106": "stevengoldberg.github.io/juno-106", // noCF? (don´t add this in a new PR)
  "jus": "zeke.github.io/jus.js.org", // noCF? (don´t add this in a new PR)
  "just": "justjs.github.io",
  "juzgados": "mteyss.github.io/juzgados",
  "jwt-autorefresh": "cchamberlain.github.io/jwt-autorefresh", // noCF? (don´t add this in a new PR)
  "kainy": "kainy.github.io/js.org",
  "kalm": "fed135.github.io/kalm.github.io", // noCF? (don´t add this in a new PR)
  "karolina-and-ryan": "mockturtlesoup.github.io/karolina-and-ryan",
  "karl": "karlcoelho.github.io/portfolio", // noCF? (don´t add this in a new PR)
  "karlbateman": "karlbateman.github.io/karlbateman.js.org",
  "kawaii": "moemoesoft.github.io/kawaii", //noCF
  "kcak11": "kcak11.github.io/js-org-web",
  "kdiacodes": "kdiacodes.github.io",
  "kea": "keajs.github.io/kea",
  "kelvinho": "kelvin2go.github.io", // noCF? (don´t add this in a new PR)
  "kewitz": "kewitz.github.io",
  "keypress": "rumkin.github.io/keypress.js.org",
  "kilvin": "rofrischmann.github.io/kilvin",
  "kite": "kite-js.github.io/kite",
  "kiwidocs": "arguiot.github.io/KiwiDocs",
  "klasa": "dirigeants.github.io/klasa-website",
  "klasy-eris": "motiontheking.github.io/klasy-eris"
  "klepto": "mwjaworski.github.io/klepto",
  "knowyourbundle": "enapupe.github.io/know-your-bundle",
  "ko": "ko25july.github.io/ko.js.org",
  "kofiloop": "norech.github.io/KofiLoop",
  "komada": "dirigeants.github.io/komada",
  "konstructor": "server.ludicrous.xyz",
  "konsumer": "konsumer.github.io", // noCF? (don´t add this in a new PR)
  "kshitij": "kshitij98.github.io",
  "kyoto": "kyotojs.github.io",
  "l2dwidget": "xiazeyu.github.io/live2d-widget.js-doc",
  "lab": "felixhenninger.github.io/lab.js",
  "labelauty": "fntneves.github.io/jquery-labelauty", // noCF? (don´t add this in a new PR)
  "lad": "ladjs.github.io/lad",
  "lambda": "lambdajs.github.io", // noCF? (don´t add this in a new PR)
  "lance": "lancepioch.com",
  "languages": "rsamaium.github.io/Languages",
  "lasers": "lukehorvat.github.io/need-more-lasers",
  "lass": "lassjs.github.io/lass",
  "latex": "michael-brade.github.io/LaTeX.js",
  "latte": "tehsenaus.github.io/latte-js",
  "laubstein": "laubstein.github.io", // noCF? (don´t add this in a new PR)
  "laue": "qingwei-li.github.io/laue",
  "leafless": "mofax.github.io/leafless",
  "lean-stack": "lean-stack.github.io", // noCF? (don´t add this in a new PR)
  "leandro": "leandrowd.github.io", // noCF? (don´t add this in a new PR)
  "learnGitBranching": "pcottle.github.io/learnGitBranching",
  "leipzig": "leipzigjs.github.io", // noCF? (don´t add this in a new PR)
  "leo": "leo66123.github.io",
  "leoj": "leoaj.github.io", // noCF? (don´t add this in a new PR)
  "lessmd": "linuxenko.github.io/lessmd",
  "leste": "atwood-cai.github.io/leste.js", // noCF? (don´t add this in a new PR)
  "lifx": "fncxpro.github.io/lifx.js",
  "liguori": "liguori.github.io", // noCF? (don´t add this in a new PR)
  "liike": "liikejs.github.io/Liike",
  "lineup": "datavisyn.github.io/lineup.js.org",
  "lineupengine": "sgratzl.github.io/lineupengine.js.org",
  "ling": "wangziling.github.io",
  "linghucong": "jiji262.github.io",
  "liveflow": "hasharray.github.io/liveflow.js",
  "localsync": "noderaider.github.io/localsync", // noCF? (don´t add this in a new PR)
  "lofitorrent": "deadblackclover.github.io/lofiTorrent",
  "logo": "js-org.github.io/logo",
  "loki": "oblador.github.io/loki",
  "lol":"xcss.github.io/lol",
  "lombok":"lombokjs.github.io",
  "loog": "israelroldan.github.io/loog",
  "lostyle": "rtsao.github.io/lostyle",
  "lribeiro": "lmribeiro.github.io",
  "ls": "links-js.github.io",
  "luxaura": "luxaurajs.netlify.com", //noCF
  "lwd": "dusterthefirst.github.io/Login-With-Discord",
  "lychee": "Artificial-Engineering.github.io/lycheeJS-website",
  "m8bot": "mapreiff.github.io/m8-bot-site",
  "ma124": "ma124.github.io",
  "madankumar": "jmadankumar.github.io",
  "magnet": "magnetjs.github.io/Magnet", // noCF? (don´t add this in a new PR)
  "majestic": "moityjs.github.io/majestic",
  "maker": "microsoft.github.io/maker.js",
  "maki": "makixx.github.io",
  "mappa": "cvalenzuela.github.io/Mappa",
  "marble": "jsguy.github.io/marble",
  "marcosflorencio": "marcosflorencio.github.io",
  "mare": "muzuiget.github.io/mare-site",
  "mark": "henry-luo.github.io/mark",
  "markdownify": "amitmerchant1990.github.io/electron-markdownify",
  "marked": "markedjs.github.io/marked",
  "markmsmith": "markmsmith.github.io",
  "markvis-editor": "geekplux.github.io/markvis-editor",
  "markvis": "geekplux.github.io/markvis",
  "martin": "martinbutler.github.io", // noCF? (don´t add this in a new PR)
  "martingollogly": "martingollogly.github.io", // noCF? (don´t add this in a new PR)
  "marxist": "wuz.github.io/marxistjs",
  "masha": "smarttelemax.github.io/MaSha",
  "materialize-bootbox": "iqbalfn.github.io/materialize-bootbox",
  "matthias-schuetz": "matthias-schuetz.github.io", // noCF? (don´t add this in a new PR)
  "maxnachlinger": "maxnachlinger.github.io", // noCF? (don´t add this in a new PR)
  "maxtracking": "maxtracking.github.io", // noCF? (don´t add this in a new PR)
  "mc": "magicarbon.github.io/mc", // noCF? (don´t add this in a new PR)
  "mde": "lukehorvat.github.io/mde-soundboard",
  "mechan": "dusterthefirst.github.io/mechan.js",
  "medan": "medan-js.github.io", // noCF
  "mediainfo": "buzz.github.io/mediainfo.js",
  "medit": "echosoar.github.io/medit",
  "medium-converter": "gunar.github.io/medium-converter", // noCF
  "medium-header": "danielfeelfine.github.io/medium-header", // noCF? (don´t add this in a new PR)
  "meethere": "ayazhafiz.github.io/meetHere",
  "megacode18": "megacode18.github.io",
  "mehrad": "mehrad77.github.io",
  "meiosis": "foxdonut.github.io/meiosis", // noCF? (don´t add this in a new PR)
  "melies-hugo": "cristinafsanz.github.io/melies-hugo",
  "melody": "trivago.github.io/melody-web",
  "memento": "jeanfortheweb.gitbooks.io/memento",
  "mern": "IamMohaiminul.GitHub.io/MERNjs",
  "mesh": "crcn.github.io/mesh.js.org", // noCF? (don´t add this in a new PR)
  "metadata": "oknosoft.github.io/metadata.js",
  "metagon": "austinhuang0131.github.io/metagon",
  "metascraper": "microlinkhq.github.io/metascraper",
  "meth": "meth-meth-method.github.io/meth",
  "metools": "yimogit.github.io/metools-plugin",
  "mf": "awto.github.io/mfjs-compiler", // noCF? (don´t add this in a new PR)
  "mhsupport": "thatonetqnk.github.io/MHSupport",
  "microfeedback": "microfeedback.github.io",
  "microlink": "microlinkhq.github.io/microlinkjs",
  "mics": "download.github.io/mics",
  "middy": "plnt9.github.io/middy",
  "miguelsr": "miguelsr.github.io", // noCF? (don´t add this in a new PR)
  "milesgitgud": "milesgitgud.github.io/homepage",
  "mimic": "500tech.github.io/mimic",
  "mina": "CenturyUna.github.io/mina",
  "minesweeper": "derflatulator.github.io/minesweeper",
  "mingjie": "mj66.github.io/mingjie.info",
  "mingyi": "liangmingyi.github.io", // noCF? (don´t add this in a new PR)
  "minigrid": "henriquea.github.io/minigrid", // noCF? (don´t add this in a new PR)
  "mininote": "htdt.github.io/mininote",
  "miny": "pablopunk.github.io/miny",
  "mis101bird": "mis101bird.github.io", // noCF? (don´t add this in a new PR)
  "miscord": "bjornskjald.github.io/miscord",
  "mithril-ja": "shibukawa.github.io/mithril-ja", // noCF? (don´t add this in a new PR)
  "mithril": "mithriljs.github.io/mithril.js",
  "mmcq": "nikola.github.io/MMCQ", // noCF? (don´t add this in a new PR)
  "mobx": "mobxjs.github.io/mobx",
  "mockjs-lite": "52cik.github.io/mockjs-lite", // noCF
  "mockyeah": "mockyeah.github.io/mockyeah",
  "modalizer": "dungo.github.io/modalizer", // noCF? (don´t add this in a new PR)
  "modbot": "modbotjs.github.io",
  "modofun": "modofunjs.github.io/modofun",
  "modv": "2xaa.github.io/modV",
  "moeditor": "moeditor.github.io",
  "mog-script": "mog-script.github.io",
  "mohit": "mohitgarg.github.io",
  "mol": "eigenmethod.github.io/mol", // noCF
  "molti": "moltijs.github.io/molti",
  "mom": "momjs.github.io/mom",
  "momentum": "wemakeweb.github.io/momentum", // noCF? (don´t add this in a new PR)
  "monkberry": "monkberry.github.io",
  "moose": "mustpax.github.io/moose",
  "moro": "omidfi.github.io/moro",
  "morocco": "moroccojs.github.io",
  "motapc": "motapc97.github.io", // noCF? (don´t add this in a new PR)
  "mpe": "weareroli.github.io/mpejs", // noCF? (don´t add this in a new PR)
  "mrn": "binggg.github.io/mrn", // noCF? (don´t add this in a new PR)
  "mrpluto": "mrpluto.github.io",
  "mscgen": "sverweij.github.io/mscgen_js",
  "msp430": "mazko.github.io/MSP430.js",
  "mubaidr": "mubaidr.github.io",
  "multiple": "nexts.github.io/Multiple.js",
  "murder": "rolandpoulter.github.io/murder", // noCF? (don´t add this in a new PR)
  "murmansk": "interfluve.github.io/Murmansk",
  "muto": "booleanapp.github.io/elastic-muto",
  "mvc": "morozovsk.github.io/mvc", // noCF
  "mvidalgarcia": "mvidalgarcia.github.io", // noCF? (don´t add this in a new PR)
  "mw": "agauniyal.github.io/mw",
  "mysketch": "dipanshkhandelwal.github.io/MySketch",
  "mythbusters": "mythbustersjs.netlify.com",
  "n-j-m": "n-j-m.github.io", // noCF? (don´t add this in a new PR)
  "namelessman": "namelessman.github.io",
  "nanimation": "imthenachoman.github.io/nAnimation", // noCF? (don´t add this in a new PR)
  "naughtychecker": "gautamkrishnar.github.io/naughtychecker.js",
  "nautilus": "ignigena.github.io/nautilus",
  "ncms": "janbiasi.github.io/ncms", // noCF? (don´t add this in a new PR)
  "ncub8": "ncub8.github.io", // noCF? (don´t add this in a new PR)
  "nearley": "kach.github.io/nearley",
  "nemaniarjun": "nemaniarjun.github.io",
  "nemo": "paypal.github.io/nemo", // noCF? (don´t add this in a new PR)
  "neo4": "janpeter.github.io/neo4js",
  "neutrino": "mozilla-neutrino.github.io/neutrino-dev",
  "nflow": "nflow-js.github.io", // noCF? (don´t add this in a new PR)
  "ng-dux": "mister-what.github.io/ngDux",
  "ng-wig": "stevermeister.github.io/ngWig", // noCF? (don´t add this in a new PR)
  "ngbook": "ngbook.github.io",
  "ngirc": "ngirc.github.io/ng-irc", // noCF
  "ngn": "nodengn.github.io/NGN", // noCF? (don´t add this in a new PR)
  "ngspice": "42ua.github.io/ngspice.js",
  "ni": "js-ni.github.io/ni",
  "nic": "nic.github.io",
  "nick": "nmai.github.io", // noCF? (don´t add this in a new PR)
  "ninh": "reeganexe.github.io/ninh",
  "nintenbot": "nintenzone.github.io/NintenBot",
  "nite": "manvalls.github.io/nite",
  "nktx": "nktx.github.io", // noCF? (don´t add this in a new PR)
  "nod": "diegohaz.github.io/nod",
  "node-atlas": "haeresis.github.io/NodeAtlas",
  "node-browser_process": "caspervonb.github.io/node-browser_process", // noCF? (don´t add this in a new PR)
  "nodegarden": "pakastin.github.io/nodegarden",
  "noderize": "cretezy.github.io/noderize",
  "noflux": "nofluxjs.gitbooks.io/noflux",
  "noobscroll": "arguiot.github.io/NoobScroll",
  "noted": "carter-slade.github.io/Noted-", // noCF? (don´t add this in a new PR)
  "noteit": "saha96.github.io/NoteIt", // noCF? (don´t add this in a new PR)
  "notepad": "amitmerchant1990.github.io/notepad",
  "notibar": "duyetdev.github.io/notibar.js",
  "notice": "leoriviera.github.io/notice",
  "novus": "territoriesofnovus.github.io",
  "npmer": "rumkin.github.io/npm-watch",
  "nsp": "hanul.github.io/NSP", // noCF? (don´t add this in a new PR)
  "nsptiles": "imthenachoman.github.io/nSPTiles", // noCF? (don´t add this in a new PR)
  "nuxtdoc": "hopeful-hoover-d87dd1.netlify.com",
  "nuxt-fluent-bootstrap": "disjfa.github.io/nuxt-fluent-bootstrap",
  "nva": "ali322.github.io/nva",
  "nvanthao": "nvanthao.github.io", // noCF? (don´t add this in a new PR)
  "nxse": "nxse.github.io",
  "nyc": "nycjsorg.github.io/nyc",
  "nyr": "suriyaakudoisc.github.io/NYR",
  "objectmodel": "sylvainpolletvillard.github.io/ObjectModel", // noCF? (don´t add this in a new PR)
  "octo": "baileyjm02.github.io/OctoJS",
  "oec": "crellison.github.io/oec",
  "ohmy": "mountainwang.github.io/ohmy",
  "oib": "andreicek.github.io/oib.js",
  "okan": "okan.github.io",
  "olivia": "oliviachang29.github.io",
  "omaha": "omahajs.github.io",
  "omega": "jczimm.github.io/omega", // noCF? (don´t add this in a new PR)
  "omer": "omeroot.github.io", // noCF? (don´t add this in a new PR)
  "omg": "pengjiyuan.github.io/omg",
  "onebang": "teamtofu.github.io/onebang",
  "onedesert": "onedesert.github.io", // noCF? (don´t add this in a new PR)
  "ongaku": "anshuman-verma.github.io/ongaku",
  "onlineth": "onlineth.github.io",
  "openrecord": "philwaldmann.github.io/openrecord",
  "opentype": "nodebox.github.io/opentype.js",
  "organizeapi": "zachary-murphy.gitbooks.io/organizeapi-docs",
  "os": "91.247.228.125", // noCF
  "oscillator": "lukehorvat.github.io/super-oscillator",
  "osom": "kikobeats.github.io/osom",
  "otakubot": "haydennyyy.github.io/otakubot",
  "overtrack": "aidant.github.io/overtrack.js",
  "pad": "ebraminio.github.io/pad.js", // noCF? (don´t add this in a new PR)
  "pageobject": "clebert.github.io/pageobject",
  "pagination": "superRaytin.github.io/paginationjs-site", // noCF
  "palette": "pakastin.github.io/palette",
  "pamatcher": "pmros.github.io/pamatcher", // noCF? (don´t add this in a new PR)
  "pantarei": "pantareijs.github.io/pantarei.js.org",
  "panza": "panza-org.github.io/panza-docs", // noCF
  "paperclip": "crcn.github.com/paperclip.js.org", // noCF? (don´t add this in a new PR)
  "paraiba": "paraibajs.github.io", // noCF? (don´t add this in a new PR)
  "parallel": "parallel-js.github.io/parallel.js",
  "parametric-svg": "parametric-svg.github.io", // noCF? (don´t add this in a new PR)
  "pas-ce-soir": "oldergod.github.io/pas-ce-soir",
  "pastate": "birdleescut.github.io/pastate",
  "pastebin-alert": "ramadhanamizudin.github.io/pastebin-alert.js", // noCF? (don´t add this in a new PR)
  "pathtrace": "kovacsv.github.io/WebGLPathTrace", // noCF? (don´t add this in a new PR)
  "patternbase": "kamescg.github.io/PatternBase",
  "paul": "paul-brown.github.io", // noCF? (don´t add this in a new PR)
  "pax": "nathan.github.io/pax",
  "pdf": "iamcristye.github.io/PDF",
  "pdfutils": "gottox.github.io/node-pdfutils", // noCF? (don´t add this in a new PR)
  "pdp-elements": "go4cas.github.io/pdp_elements", // noCF? (don´t add this in a new PR)
  "peekaboo": "nadavspi.github.io/peekaboo.js",
  "pegboard": "mplewis.github.io/pegboard",
  "pekanbaru": "pekanbarujs.github.io",
  "penguin": "domachine.github.io/penguin",
  "penn-sdk": "pennlabs.github.io/penn-sdk-node", // noCF? (don´t add this in a new PR)
  "pentris": "justinjc.github.io/pentris2", // noCF? (don´t add this in a new PR)
  "perguth": "perguth.github.io",
  "perspective": "leopoldthecoder.github.io/Perspective",
  "pguth": "pguth.github.io",
  "pharaoh": "pharaoh-js.github.io", // noCF? (don´t add this in a new PR)
  "phobos": "phobosjs.github.io/phobos.js",
  "photo-sphere-viewer": "mistic100.github.io/Photo-Sphere-Viewer", // noCF? (don´t add this in a new PR)
  "picodom": "picodom.github.io",
  "picsim": "mazko.github.io/picsim.js",
  "piii": "piiijs.github.io/piii.js.org",
  "pinf": "pinf.github.io", // noCF? (don´t add this in a new PR)
  "pipes": "pipesjs.github.io", // noCF? (don´t add this in a new PR)
  "pitermarx": "pitermarx.github.io", // noCF? (don´t add this in a new PR)
  "pivot": "wnda.github.io/pivot",
  "pivotgrid": "iskandr1.github.io/Pivot",
  "pivottable": "nicolaskruchten.github.io/pivottable",
  "pixel": "lumitedubbz.github.io/Pixel",
  "pixelart": "meriadec.github.io/PixelartJS", // noCF? (don´t add this in a new PR)
  "plait": "wildlyinaccurate.github.io/plait",
  "plan": "agauniyal.github.io/plan",
  "planetx": "planetxjs.github.io",
  "planisphere": "dai-shi.github.io/planisphere-site", // noCF? (don´t add this in a new PR)
  "platz": "fylipp.github.io/platz.js",
  "plexr": "plexrbot.github.io",
  "pliers": "pliersjs.github.io", // noCF? (don´t add this in a new PR)
  "pnpm": "pnpm.github.io",
  "pocketessential": "pocketessential.github.io",
  "poegems": "max-arias.github.io/poeGems", // noCF? (don´t add this in a new PR)
  "pogo": "aaronduino.github.io/pogo",
  "poi": "poi.netlify.com",
  "poke": "gregjw.github.io/poke",
  "polished": "styled-components.github.io/polished",
  "polkadot": "polkadot-js.github.io",
  "polygon-clipping": "mfogel.github.io/polygon-clipping",
  "polythene": "arthurclemens.github.io/Polythene", // noCF? (don´t add this in a new PR)
  "pomidorus": "tatyshev.github.io/pomidorus",
  "popper": "fezvrasta.github.io/popper.js",
  "porter": "ahopkins.github.io/porterjs", // noCF? (don´t add this in a new PR)
  "positivebot": "positiveterminator.github.io/positivebot-site",
  "post-type-discovery": "twozeroone.github.io/post-type-discovery",
  "potion": "finnfiddle.github.io/potion",
  "pubg": "ickerio.github.io/pubg.js",
  "prettylog": "moosecoop.github.io/PrettyLog/",
  "pristine": "sha256.github.io/Pristine", //noCF
  "prismarine", "prismarinejs.github.io",
  "producify": "jesobreira.github.io/producify",
  "profanity-finder": "gautamkrishnar.github.io/profanity-finder.js",
  "proteic": "proteus-h2020.github.io/proteic",
  "proton-native": "kusti8.github.io/proton-native",
  "protype": "arguiot.github.io/ProType",
  "pure": "fengzilong.github.io/pure",
  "purpzie": "purpzie.github.io",
  "purpziesucks": "purpzie.github.io/sucks",
  "pwa-cookbook": "sylvainpolletvillard.github.io/pwa-cookbook",
  "qs": "kirjs.github.io/qs.js", // noCF? (don´t add this in a new PR)
  "querybuilder": "mistic100.github.io/jQuery-QueryBuilder", // noCF? (don´t add this in a new PR)
  "question": "teamtofu.github.io/questionify",
  "quickdb": "truexpixels.gitbooks.io/quickdb",
  "quiz-app": "odevlord.github.io/Quiz-App", // noCF? (don´t add this in a new PR)
  "quiz-revamped": "abhisekp.github.io/Quiz-Revamped", // noCF? (don´t add this in a new PR)
  "ractive": "ractivejs.github.io",
  "rad": "rapid-application-development-js.github.io/RAD.JS", // noCF? (don´t add this in a new PR)
  "radi": "radi-js.github.io/radi",
  "radial": "ckgrafico.github.io/radial.js", // noCF? (don´t add this in a new PR)
  "rafaelmangolin": "rafaelMangolin.github.io", // noCF? (don´t add this in a new PR)
  "rag": "michaellyons.github.io/react-amazon-gallery", // noCF? (don´t add this in a new PR)
  "rahul": "rahulsukla.github.io/rahul", // noCF? (don´t add this in a new PR)
  "ralmaz": "ralmaz.github.io",
  "ralphi": "yonjah.github.io/ralphi",
  "randy": "randyviandaputra.github.io",
  "rangeslider": "andreruffert.github.io/rangeslider.js", // noCF? (don´t add this in a new PR)
  "rate-limiter-api": "abhisekp.github.io/rate-limiter-api",
  "razod": "razod.github.io/razod",
  "rdf": "rdfjs.github.io", // noCF
  "react-atomic-ui": "react-atomic.github.io/react-atomic-ui",
  "react-autosuggest": "moroshko.github.io/react-autosuggest", // noCF? (don´t add this in a new PR)
  "react-autowhatever": "moroshko.github.io/react-autowhatever", // noCF? (don´t add this in a new PR)
  "react-chart": "react-charts.netlify.com",
  "react-charts": "react-charts.netlify.com",
  "react-controlled-form": "rofrischmann.github.io/react-controlled-form",
  "react-coroutine": "alexeyraspopov.github.io/react-coroutine",
  "react-day-picker": "gpbl.github.io/react-day-picker", // noCF
  "react-dropzone": "react-dropzone.netlify.com",
  "react-easy-swipe": "leandrowd.github.io/react-easy-swipe", // noCF? (don´t add this in a new PR)
  "react-entanglement": "react-entanglement.github.io",
  "react-form": "react-form.netlify.com",
  "react-hint": "slmgc.github.io/react-hint",
  "react-leaflet": "paullecam.github.io/react-leaflet",
  "react-move": "react-move.netlify.com",
  "react-native-floating-labels": "mayank-patel.github.io/react-native-floating-labels",
  "react-observatory": "halfzebra.gitbooks.io/react-observatory",
  "react-pivottable": "plotly.github.io/react-pivottable",
  "react-responsive-carousel": "leandrowd.github.io/react-responsive-carousel", // noCF? (don´t add this in a new PR)
  "react-shared": "rvikmanis.github.io/react-shared", // noCF? (don´t add this in a new PR)
  "react-state": "tannerlinsley.github.io/react-state",
  "react-static": "nozzle-react-static.netlify.com",
  "react-story": "react-story.netlify.com",
  "react-styleguidist": "styleguidist.netlify.com",
  "react-table": "react-table.netlify.com",
  "react-through": "hosting.gitbook.com",
  "react-toulouse": "moox.github.io/react-toulouse",
  "reactabular": "bebraw.github.io/reactabular",
  "reactdesktop": "gabrielbull.github.io/react-desktop", // noCF? (don´t add this in a new PR)
  "reactql": "leebenson.github.io/reactql-site",
  "reader": "ruanyl.github.io/js-reader", // noCF? (don´t add this in a new PR)
  "realt": "vnkitaev.github.io/realt",
  "realtime": "datamcfly.github.io/realtimejs", // noCF? (don´t add this in a new PR)
  "ream": "ream.github.io",
  "reas": "diegohaz.github.io/reas",
  "reassign": "hasharray.github.io/reassign.js",
  "rebatov": "rebatov.github.io",
  "rebem": "rebem.github.io", // noCF? (don´t add this in a new PR)
  "recycle": "recyclejs.github.io/recycle",
  "redis": "noderedis.github.io/node_redis", // noCF? (don´t add this in a new PR)
  "redom": "redom.github.io/redom",
  "reduce": "reducejs.github.io", // noCF? (don´t add this in a new PR)
  "redux-actions": "hosting.gitbook.com", // noCF
  "redux-data-structures": "adrienjt.github.io/redux-data-structures",
  "redux-loop": "redux-loop.github.io/redux-loop",
  "redux-minimal": "catalin-luntraru.github.io/redux-minimal",
  "redux-nakshatra": "agenthunt.github.io/redux-nakshatra",
  "redux-observable-cn": "rxjs-cn.github.io/redux-observable-cn",
  "redux-observable": "redux-observable.github.io/redux-observable",
  "redux-resource": "hosting.gitbook.com", // noCF
  "redux-saga-in-chinese": "superRaytin.github.io/redux-saga-in-chinese",
  "redux-saga": "redux-saga.github.io/redux-saga",
  "redux-tiles": "bloomca.github.io/redux-tiles",
  "redux-undo": "omnidan.github.io/redux-undo", // noCF? (don´t add this in a new PR)
  "redux-webpack-boilerplate": "cchamberlain.github.io/redux-webpack-boilerplate", // noCF? (don´t add this in a new PR)
  "redux": "hosting.gitbook.com", // noCF
  "reduxible": "pitzcarraldo.github.io/reduxible", // noCF? (don´t add this in a new PR)
  "refraction": "mbasso.github.io/refraction", // noCF? (don´t add this in a new PR)
  "refujs": "refujs.github.io", // noCF? (don´t add this in a new PR)
  "rekit": "supnate.github.io/rekit", // noCF
  "relate": "jakelazaroff.github.io/relate", // noCF? (don´t add this in a new PR)
  "remark": "remarkjs.github.io/remark",
  "rene": "revrng.github.io", // noCF? (don´t add this in a new PR)
  "repackage": "cchamberlain.github.io/repackage", // noCF? (don´t add this in a new PR)
  "request": "request.gitbooks.io", // noCF? (don´t add this in a new PR)
  "reshift": "hasharray.github.io/reshift.js",
  "restjs": "daviesgeek.github.io/restjs", // noCF? (don´t add this in a new PR)
  "revaluate": "hasharray.github.io/revaluate.js",
  "rickdesantis": "rickdesantis.github.io",
  "riklewis": "riklewis.github.io",
  "riot": "riot.github.io",
  "riotgear": "riotgear.github.io",
  "rishav": "xrisk.github.io",
  "risingstars": "risingstars.netlify.com",
  "risingstars2016": "michaelrambeau.github.io/risingstars2016",
  "rivki": "mikqi.github.io",
  "rize": "g-plane.github.io/rize",
  "rmodal": "zewish.github.io/rmodal.js",
  "rock": "w3core.github.io/RockJS",
  "rocket": "KevinOfNeu.github.io/rocket",
  "rockjins": "rockjins.github.io",
  "roger": "klopango.github.io/js-org",
  "rosmaro": "lukaszmakuch.github.io/rosmaro",
  "router-advanced": "oldergod.github.io/router-advanced",
  "rp": "rpocklin.github.io", // noCF? (don´t add this in a new PR)
  "rsshub": "diygod.github.io/RSSHub",
  "ruhuman": "ruhuman.github.io", // noCF? (don´t add this in a new PR)
  "ruwan": "rpgee.github.io",
  "s3swa": "s3swa-ict-upgifter.github.io/snow-eater",
  "s4swa": "s4swa.github.io",
  "saadmir": "saadmir.github.io", // noCF? (don´t add this in a new PR)
  "sagui": "saguijs.github.io", // noCF? (don´t add this in a new PR)
  "saigon": "saigonjs.github.io",
  "sailesh": "saileshkasaju.github.io/crud-react-redux-mongo",
  "salvacam": "salvacam.github.io",
  "salvattore": "rnmp.github.io/salvattore",
  "sam": "jdubray.github.io/sam", // noCF? (don´t add this in a new PR)
  "samlify": "tngan.github.io/samlify",
  "samplyr": "arze1.github.io/samplyr-site",
  "sanctuary": "sanctuary-js.github.io/sanctuary-site",
  "sandeepkhandewale": "learner1024.github.io",
  "sandstone": "storehubnet.github.io/sandstone",
  "sao": "egoist.github.io/sao",
  "sass": "medialize.github.io/playground.sass.js", // noCF? (don´t add this in a new PR)
  "saulosantiago": "saulosilva.github.io", // noCF? (don´t add this in a new PR)
  "savingthrow": "pdistefano.github.io/SavingThrow.js", // noCF? (don´t add this in a new PR)
  "schisma": "schisma.github.io/opensource", // noCF? (don´t add this in a new PR)
  "scratch": "scratch-js.github.io",
  "scrolledin": "manuelromeroramos.github.io/scrolledIn.js", // noCF? (don´t add this in a new PR)
  "sdk-design": "huei90.github.io/javascript-sdk-design", // noCF? (don´t add this in a new PR)
  "sean": "seancallinan.github.io", // noCF? (don´t add this in a new PR)
  "seatbelt": "seatbeltjs.github.io/seatbelt",
  "sed": "42ua.github.io/sed",
  "seesaw": "cajogos.github.io/seesaw", // noCF? (don´t add this in a new PR)
  "segoe-mdl2-css": "ckgrafico.github.io/Segoe-mdl2-assets-css", // noCF? (don´t add this in a new PR)
  "select_io": "selaromi.github.io/select_io", // noCF? (don´t add this in a new PR)
  "selectors": "selectors.github.io/selectors.js",
  "selectric": "lcdsantos.github.io/jQuery-Selectric", // noCF? (don´t add this in a new PR)
  "sendilkumarn": "sendilkumarn.github.io",
  "seoul": "seouljs.github.io/seoul.js.org",
  "sequential": "lorenzoongithub.github.io/sequential",
  "serender": "youssefkababe.github.io/serender", // noCF? (don´t add this in a new PR)
  "serginator": "serginator.github.io", // noCF? (don´t add this in a new PR)
  "serializer": "haircvt.github.io/serializerjs", // noCF? (don´t add this in a new PR)
  "service-mocker": "service-mocker.github.io/service-mocker",
  "serviceberry": "bob-gray.github.io/serviceberry",
  "shaily": "shailysangwan.github.io",
  "shd": "pro-devel.github.io",
  "shedali": "shedali.github.io", // noCF? (don´t add this in a new PR)
  "shekhar": "shekharreddy4.github.io/Shekhar",
  "shine": "shinenelson.github.io/shine.js.org",
  "shortquery": "s--minecraft.gitbooks.io/shortquery-js", // noCF? (don´t add this in a new PR)
  "shscode":"shs-coding-club-projects.github.io",
  "silfr": "silfr.github.io/iterativecolor",
  "silky": "wvv8oo.github.com/silky", // noCF? (don´t add this in a new PR)
  "siluna": "pahund.github.io/siluna", // noCF? (don´t add this in a new PR)
  "simulacra": "daliwali.github.io/simulacra",
  "single-page-web-app": "lukejpreston.github.io/single-page-web-app",
  "sirkit": "seckwei.github.io/SirKit_CircuitSim", // noCF? (don´t add this in a new PR)
  "sizle": "christoga.github.io/sizle", // noCF? (don´t add this in a new PR)
  "sjhsbot": "sjhsbot.github.io/SJHS-Bot",
  "skate": "skatejs.github.io", // noCF? (don´t add this in a new PR)
  "skeptical-coder": "rbpinheiro.github.io/skeptical-coder",
  "sketch": "keiww.github.io/sketch",
  "skx": "skx.github.io", // noCF? (don´t add this in a new PR)
  "slang": "ramadis.github.io/slang", // noCF? (don´t add this in a new PR)
  "slideout": "mango.github.io/slideout",
  "slides": "deadcoder0904.github.io/slides-official-website",
  "slidey": "thegreatrazz.github.io/slidey",
  "slim": "eavichay.github.io/slim.js",
  "smartquotes": "kellym.github.io/smartquotes.js",
  "smoove": "abemedia.github.io/jquery-smoove",
  "sn0w": "greensn0w.github.io", // noCF? (don´t add this in a new PR)
  "snowglobe": "3052cole.github.io/snowglobe",
  "snekfetch": "devsnek.github.io/snekfetch",
  "social-likes-next": "sapegin.github.io/social-likes-next", // noCF? (don´t add this in a new PR)
  "social-likes": "sapegin.github.io/social-likes", // noCF? (don´t add this in a new PR)
  "solder": "mcrocks999.github.io/solder.js",
  "solome": "solome.github.io",
  "sonny": "sonnylazuardi.github.io", // noCF? (don´t add this in a new PR)
  "sox": "sox-team.github.io/sox", // noCF? (don´t add this in a new PR)
  "spa": "sucom.github.io/SPA.js",
  "spaas": "pakastin.github.io/spaas",
  "spectragram": "adrianengine.github.io/jquery-spectragram", // noCF? (don´t add this in a new PR)
  "spicdev": "spicdev.github.io", // noCF? (don´t add this in a new PR)
  "spin": "fgnass.github.io/spin.js", // noCF? (don´t add this in a new PR)
  "spirare": "waldenn.github.io/spirare", // noCF? (don´t add this in a new PR)
  "spiritual": "spiritual-js.github.io", // noCF? (don´t add this in a new PR)
  "splitting": "shshaw.github.io/Splitting",
  "spreadsheet": "chiefofgxbxl.github.io/Spreadsheet.js",
  "spritesheet": "arcadiogarcia.github.io/Spritesheet.js", // noCF? (don´t add this in a new PR)
  "spritewerk": "bildepunkt.github.io/spritewerk", // noCF? (don´t add this in a new PR)
  "squeak": "bertfreudenberg.github.io/SqueakJS",
  "sri": "jackub.github.io/subresource-integrity-fallback",
  "stabs": "wnda.github.io/stabs",
  "stack": "stackgamedevelopment.github.io",
  "stahlstadt": "dist1.storyblok.com",
  "stampit": "stampit-org.gitbook.io/docs",
  "standard-resource": "hosting.gitbook.com", // noCF
  "starratio": "starratio.github.io/star-ratio", // noCF
  "start": "deepsweet.github.io/start",
  "state-machine-cat": "sverweij.github.io/state-machine-cat",
  "staticinstance": "staticinstance.github.io", // noCF? (don´t add this in a new PR)
  "stats": "js-org.github.io/stats.js.org",
  "status.diamond": "diamondpkg.github.io/status", // noCF? (don´t add this in a new PR)
  "steemsites": "yhozen.github.io/steemsites",
  "stego": "zeruniverse.github.io/CryptoStego", // noCF? (don´t add this in a new PR)
  "stepan": "stevermeister.github.io", // noCF? (don´t add this in a new PR)
  "stephenmccall": "stephenmccall.github.io", // noCF? (don´t add this in a new PR)
  "steven": "stpeng.github.io",
  "sticky": "fawmi.github.io/sticky-pro",
  "stockings": "kgroat.github.io/stockings",
  "storage": "uzitech.github.io/storage.js",
  "storybook": "storybooks.github.io/storybook",
  "storybooks": "storybooks.github.io",
  "stratic": "straticjs.github.io",
  "stress": "julindra.github.io/stress.js",
  "structure": "talyssonoc.gitbooks.io/structure",
  "stuck": "linuxenko.github.io/unstuck-webpack",
  "style": "dhilipsiva.github.io/style.js", // noCF? (don´t add this in a new PR)
  "styled-css-grid": "styled-css-grid.netlify.com",
  "styled-icons": "styled-icons.netlify.com",
  "styletron": "rtsao.github.io/styletron", // noCF? (don´t add this in a new PR)
  "stylis": "thysultan.github.io/stylis.js",
  "sub": "subjs.github.io",
  "sudarshan": "sudarshanRaul.github.io",
  "sudoku": "andreynering.github.io/sudoku",
  "sulky": "shingle.github.io/sulky", // noCF? (don´t add this in a new PR)
  "sunsistemo": "sunsistemo.github.io/sunsistemo",
  "super": "websage-team.github.io/super",
  "super-controls": "thebearingedge.github.io/super-controls",
  "super-trim": "beeblebrox3.github.io/super-trim",
  "supernova": "janbiasi.github.io/supernova", // noCF? (don´t add this in a new PR)
  "svelteui": "transpiling.github.io/svelte-flat-ui",
  "svg-skeleton": "yyued.github.io/SVG-Skeleton",
  "svr": "kikobeats.github.io/svr",
  "sweetalert": "t4t5.github.io/sweetalert",
  "switchit": "dongryphon.github.io/switchit",
  "switchblade": "switchbladebot.github.io/onepage",
  "synth": "lukehorvat.github.io/synth-mood",
  "syr": "dmikey.github.io/syr",
  "tagster": "goschevski.github.io/tagster", // noCF? (don´t add this in a new PR)
  "talker": "secondstreet.github.io/talker.js", // noCF? (don´t add this in a new PR)
  "tanok": "brabadu.github.io/tanok",
  "tap-flux": "technologyadvice.github.io/tap-flux", // noCF? (don´t add this in a new PR)
  "tapestry-wp": "shortlist-digital.github.io/tapestry-wp",
  "tara": "shakyatara.github.io",
  "tart": "tart.github.io/tartJS", // noCF? (don´t add this in a new PR)
  "taskata": "f-ruxton.github.io/taskata",
  "tatsumaki": "mrjacz.github.io/tatsumaki.js",
  "taylorreis": "taylorreis.github.io",
  "tead": "teadjs.github.io",
  "techfest": "anukul.github.io/techfest", // noCF? (don´t add this in a new PR)
  "telaviv": "dustin-h.github.io/telaviv", // noCF? (don´t add this in a new PR)
  "telegraf": "telegraf.github.io/telegraf", // noCF? (don´t add this in a new PR)
  "teletype": "keyvank.github.io/teletype.js",
  "temme": "shinima.github.io/temme",
  "temple": "beneaththeink.github.io/Temple", // noCF? (don´t add this in a new PR)
  "tequila": "tequila-js.github.io",
  "terminal": "gottox.github.io/terminal.js", // noCF? (don´t add this in a new PR)
  "textillate": "jschr.github.io/textillate", // noCF? (don´t add this in a new PR)
  "texy": "egoist.github.io/texy",
  "thea": "idokutela.github.io/thea",
  "thegrid": "antoniandre.github.io/grid",
  "themoviedb": "chrisenytc.github.io/themoviedb", // noCF? (don´t add this in a new PR)
  "theorem": "arguiot.github.io/TheoremJS",
  "thundercats": "thundercatsjs.github.io/thundercats", // noCF? (don´t add this in a new PR)
  "timeout": "anshuman-verma.github.io/setTimeout",
  "timerizer": "callumacrae.github.io/timerizerJS", // noCF? (don´t add this in a new PR)
  "tina": "tinajs.github.io/tina",
  "tint": "tintjs.github.io", // noCF? (don´t add this in a new PR)
  "tinylinux": "e8johan.github.io/tiny-js", // noCF? (don´t add this in a new PR)
  "tixol": "vcxiz.github.io/tixol",
  "tmr": "ttttmr.github.io",
  "toad": "wnda.github.io/toad",
  "tokyo": "tokyojs.github.io",
  "tom": "kikobeats.github.io/tom",
  "tori": "boostcode.github.io/torijs",
  "torino": "torinojs.github.io", // noCF? (don´t add this in a new PR)
  "torlondev": "torlondev.github.io",
  "tp-alpha": "jotto3053.github.io/tp2",
  "tp": "jottocraft.github.io/tp",
  "trace": "andreasmadsen.github.io/trace",
  "transposer": "francesco-dipi.github.io/transposer",
  "treviso": "trevisojs.github.io", // noCF? (don´t add this in a new PR)
  "trevorgk": "trevorgk.github.io", // noCF? (don´t add this in a new PR)
  "trier": "creimers.github.io/trier",
  "trilogy": "citycide.github.io/trilogy",
  "trinity": "marcus-sa.github.io/trinity-js",
  "troxel": "troxeljs.github.io",
  "true-myth": "chriskrycho.github.io/true-myth",
  "try-catch-finally": "c24w.github.io/try-catch-finally.js",
  "ts-react-boilerplate": "lapanti.github.io/ts-react-boilerplate",
  "ts2jsdoc": "spatools.github.io/ts2jsdoc", // noCF? (don´t add this in a new PR)
  "tsdi": "knisterpeter.github.io/tsdi",
  "tsfp": "zhenwenc.github.io/tsfp", // noCF? (don´t add this in a new PR)
  "ttgprotect": "ttgprotect.github.io",
  "turbo": "turbo.github.io",
  "tux": "tux.gitbooks.io/docs",
  "tweed": "tweedjs.github.io",
  "tweetnacl": "dchest.github.io/tweetnacl-js",
  "twentyfive": "luckyshot.github.io/twentyfive",
  "two": "jonobr1.github.io/two.js",
  "tydel": "fahad19.github.io/tydel", // noCF? (don´t add this in a new PR)
  "typeahead": "corejavascript.github.io/typeahead.js",
  "u": "hanul.github.io/UJS", // noCF? (don´t add this in a new PR)
  "uav": "unearth-inc.github.io/uav",
  "ubuntu-hideout": "bytecommander.github.io/ubuntu-hideout",
  "udnisap": "udnisap.github.io",
  "ukazap": "ukazap.github.io", // noCF? (don´t add this in a new PR)
  "ulog": "download.github.io/ulog",
  "ultcombo": "ultcombo.github.io",
  "uneditable": "iamcristye.github.io/Uneditable.js",
  "unexpected": "unexpectedjs.github.io", // noCF? (don´t add this in a new PR)
  "uni": "arcadiogarcia.github.io/UNIJS", // noCF? (don´t add this in a new PR)
  "units": "stak-digital.github.io/units",
  "up": "codefeathers.github.io/up",
  "upresent": "bobbybee.github.io/uPresent", // noCF? (don´t add this in a new PR)
  "urban": "snekjs.github.io/urban.js",
  "utscrooms": "sunakujira1.github.io/UTSCRooms",
  "uuid": "rumkin.github.io/uuid",
  "uvcharts": "imaginea.github.io/uvCharts", // noCF? (don´t add this in a new PR)
  "v-charts": "elemefe.github.io/v-charts",
  "vaguilar": "vaguilar.github.io", // noCF? (don´t add this in a new PR)
  "valentin": "valentinvieriu.github.io", // noCF? (don´t add this in a new PR)
  "validator": "ppoffice.github.io/validator.js", // noCF? (don´t add this in a new PR)
  "valine": "xcss.github.io/valine",
  "valirator": "massive-angular.github.io/valirator",
  "vanessa": "vanessa219.github.io/vanessa",
  "vanilla": "haeresis.github.io/vanilla-js-dom",
  "vayne": "vaynejs.github.io",
  "vbuild": "egoist.github.io/vbuild",
  "verifyr": "arze1.github.io/verifyr-site",
  "verse": "druidic.github.io/verse",
  "vico": "bohdantkachenko.github.io/vico", // noCF? (don´t add this in a new PR)
  "video-react": "video-react.github.io",
  "vinimdocarmo": "vinimdocarmo.github.com", // noCF? (don´t add this in a new PR)
  "viperhtml": "viperhtml.github.io",
  "visualnovel": "selcher.github.io/visualnoveljs", // noCF? (don´t add this in a new PR)
  "vk-x": "vk-x.github.io",
  "vncz": "xvincentx.github.io/vncz",
  "voloshins": "voloshins.github.io", // noCF? (don´t add this in a new PR)
  "vorpal": "dthree.github.io/vorpal", // noCF? (don´t add this in a new PR)
  "voxelcss": "jhwohlgemuth.github.io/voxelcss",
  "vscode-apielements": "xvincentx.github.io/vscode-apielements",
  "vue-aplayer": "sevenoutman.github.io/vue-aplayer",
  "vue-core": "triotech-fr.github.io/vue-core"
  "vue-land": "egoist.github.io/vue-land",
  "vue-mdc": "na-west1.surge.sh",
  "vue-multiselect": "shentao.github.io/vue-multiselect",
  "vue-roast": "kronicker.github.io/vue-roast",
  "vue-route-timeline": "disjfa.github.io/vue-route-timeline",
  "vue-treeselect": "riophae.github.io/vue-treeselect",
  "vuejsindy": "vuejsindy.github.io",
  "vuelog": "myst729.github.io/Vuelog",
  "vuikit": "vuikit.github.io/vuikit.js.org",
  "vuongdothanhhuy": "vuongdothanhhuy.github.io", // noCF? (don´t add this in a new PR)
  "vxv": "vxv.netlify.com",
  "w4ctech": "w4ctech.github.io",
  "wanna": "mkermani144.github.io/wanna",
  "wargamer": "hkwu.github.io/wargamer",
  "warnbot": "darkcoding-js.github.io/WarnBot",
  "warrior": "olistic.github.io/warriorjs",
  "watch": "ducin.github.io/watchjs.org", // noCF? (don´t add this in a new PR)
  "wayou": "wayou.github.io", // noCF? (don´t add this in a new PR)
  "wdd": "wangduanduan.github.io",
  "weaver": "maxkfranz.github.io/weaver", // noCF? (don´t add this in a new PR)
  "webassembly": "xtuc.github.io/webassemblyjs",
  "webpack": "webpack.github.io/webpack.js.org",
  "wedgetail": "wedgetail.netlify.com",
  "weekly": "xdimh.github.io/weekly",
  "whiteboard": "yhozen.github.io/whiteboard",
  "wiki": "requarks.github.io/wiki-site",
  "wildfire": "cheng-kang.github.io/wildfire",
  "within": "eric-brechemier.github.io/within", // noCF? (don´t add this in a new PR)
  "wooyun": "jiji262.github.io/wooyun_articles",
  "wordywordy": "sverweij.github.io/wordywordy",
  "writebar": "alexander-shvets.github.io/writebar",
  "wwb": "eqielb.github.io/wwb", // noCF? (don´t add this in a new PR)
  "wyfe": "wangyuanstudio.github.io/WYFE", // noCF? (don´t add this in a new PR)
  "xn--z7h": "daniloprates.github.io/xn--z7h",
  "xprmntl": "xprmntl.github.io", // noCF? (don´t add this in a new PR)
  "xto6": "mohebifar.github.io/xto6", // noCF? (don´t add this in a new PR)
  "xtype": "lucono.github.io/xtypejs", // noCF? (don´t add this in a new PR)
  "y86": "quietshu.github.io/y86", // noCF? (don´t add this in a new PR)
  "yadl": "yadljs.github.io",
  "yagolopez": "yagolopez.github.io",
  "yah": "thassiov.github.io/yah", // noCF? (don´t add this in a new PR)
  "yamdbf": "zajrik.github.io/yamdbf",
  "yamil-villarreal": "yvillarreal.github.io/index",
  "yargs": "yargs.github.io", // noCF? (don´t add this in a new PR)
  "yf": "yafey.coding.me",
  "youtim": "mortonfox.github.io/YouTim", // noCF? (don´t add this in a new PR)
  "youtube-box": "lucasmonteverde.github.io/youtube-box", // noCF? (don´t add this in a new PR)
  "yt": "tangge1119.github.io",
  "yusril": "yusrilhs.github.io", // noCF
  "zanyuyu": "zanseven007.github.io/resume", // noCF
  "zaporizhzhia": "zaporizhzhiajs.github.io",
  "zazu": "zazujs.github.io", // noCF? (don´t add this in a new PR)
  "zeit": "vinhpz.github.io",
  "zodiac": "indus.github.io/Zodiac", // noCF? (don´t add this in a new PR)
  "zombie": "assaf.github.io/zombie", // noCF? (don´t add this in a new PR)
  "zp": "tilda.ws",
  "zty": "zetaoyang.github.io",
  /*
  * please don"t add your subdomain records down here!
  * insert them in alphabetical order to help reduce merge conflicts.
  * <3
  */
}
