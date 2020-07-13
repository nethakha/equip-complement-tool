function put() {
    let f = document.forms.f;

    let Nest = f.NEST.value || "-";
    let IndentNumber = f.INDENT_NUMBER.value || "0";
    let Name = f.NAME.value;
    let Rank = f.RANK.value;
    let Crush = f.CRUSH.value;
    let Penet = f.PENET.value;
    let Fire = f.FIRE.value || "0";
    let Ice = f.ICE.value || "0";
    let Spark = f.SPARK.value || "0";
    let God = f.GOD.value || "0";
    let Skill = f.SKILL.value || "";
    let Make = f.MAKE.value || "-";
    let Upgrade = f.UPGRADE.value || "-";

    Fire = Attribute(Fire);
    Ice = Attribute(Ice);
    Spark = Attribute(Spark);
    God = Attribute(God);

    Indent = "";
    if (IndentNumber != "0") {
        for (i = 0; i < IndentNumber; i++) {
            Indent += "　";
        }
    }

    switch (Nest) {
        case "I":
            Nest = "┃" + Indent + "┗";
            break;
        case "L":
            Nest = Indent + "┗";
            break;
        case "T":
            Nest = Indent + "┣";
            break;
        default:
            Nest = Indent;
            break;
    }

    Skill = Skill.replace(/ /g, "　");

    var MakeUp = function (v, s) {
        if (v != "-") {
            v.replace(/ /g, "　");
            vInfo = "\n|~|BGCOLOR(navy):COLOR(#FFF):" + s + "|>|>|>|>|>|>|" + v + "|";
            return vInfo;
        }
        return "";
    }

    let Info = "|" + Nest + Name + "|" + Rank + "|" + Crush + "|" + Penet + "|" + Fire + "|" + Ice + "|" + Spark + "|" + God + "|" + Skill + "|";

    Info += MakeUp(Make, "合成");
    Info += MakeUp(Upgrade, "強化");

    Info = Info.replace(/\t/g, "");

    document.getElementById("output").value = Info;




};

function Attribute(attr) {
    let ret = "―"
    switch (attr) {
        case "-2":
            ret = "××";
            break;
        case "-1":
            ret = "×";
            break;
        case "1":
            ret = "◎";
            break;
        case "2":
            ret = "◎◎";
            break;
        default:
            break;
    }
    return ret;
}

function copy() {
    let t = document.getElementsByTagName("textarea")[0];
    t.select();
    document.execCommand("copy");
}