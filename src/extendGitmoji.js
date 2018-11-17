

const getMappedConfig = extension => {
    let mappedConfig = {}
    extension.forEach(gitmoji => {
        mappedConfig[gitmoji.name] = gitmoji
    })
    return mappedConfig
}

const getMergedConfig   = emojiConfig => {
    const mappedConfig = getMappedConfig(gitmojiCCExtension)

    emojiConfig.gitmojis.forEach(emoji => {
        let {name} = emoji

        let extendedEmoji = mappedConfig[name]
        if (extendedEmoji != null) {
            let prefix = mappedConfig[name].cc_prefix
            emojiConfig.cc_prefix = prefix
        }
        emojiConfig.gitmojis.push(extendedEmoji)
    })

    return emojiConfig
}

export const emojiConfigFake = {
    "gitmojis": [
        {
            "emoji":"🎨",
            "entity":"&#x1f3a8;",
            "code":":art:",
            "description":"Improving structure / format of the code.",
            "name":"art"
        },
        {
            "emoji":"⚡️",
            "entity":"&#x26a1;",
            "code":":zap:",
            "description":"Improving performance.",
            "name":"zap"
        },
        {
            "emoji":"🔥",
            "entity":"&#x1f525;",
            "code":":fire:",
            "description":"Removing code or files.",
            "name":"fire"
        }
    ]
}

export const gitmojiCCExtension = [
        {
            "emoji":"🎨",
            "entity":"&#x1f3a8;",
            "code":":art:",
            "description":"Improving structure / format of the code.",
            "name":"art",
            "cc_prefix": "refactor"
        },
        {
            "emoji":"🐛",
            "entity":"&#x1f41b;",
            "code":":bug:",
            "description":"Fixing a bug.",
            "name":"bug",
            "cc_prefix": "fix"
        },
        {
            "emoji":"⚡️",
            "entity":"&#x26a1;",
            "code":":zap:",
            "description":"Improving performance.",
            "name":"zap",
            "cc_prefix": "perf"
        },
        {
            "emoji": "🚑",
            "entity": "&#128657;",
            "code": ":ambulance:",
            "description": "Critical hotfix.",
            "name": "ambulance",
            "cc_prefix": "fix"
        },
        {
            "emoji":"✨",
            "entity":"&#x2728;",
            "code":":sparkles:",
            "description":"Introducing new features.",
            "name":"sparkles",
            "cc_prefix": "feature"
        },
        {
            "emoji":"📝",
            "entity":"&#x1f4dd;",
            "code":":memo:",
            "description":"Writing docs.",
            "name":"memo",
            "cc_prefix": "doc"
        },
        {
            "emoji":"🚀",
            "entity":"&#x1f680;",
            "code":":rocket:",
            "description":"Deploying stuff.",
            "name":"rocket",
            "cc_prefix": "release"
        },
        {
            "emoji":"💄",
            "entity":"&#ff99cc;",
            "code":":lipstick:",
            "description":"Updating the UI and style files.",
            "name":"lipstick",
            "cc_prefix": "style"
        },
        {
            "emoji":"🎉",
            "entity":"&#127881;",
            "code":":tada:",
            "description":"Initial commit.",
            "name":"tada",
            "cc_prefix": "chore"
        },
        {
            "emoji":"✅",
            "entity":"&#x2705;",
            "code":":white_check_mark:",
            "description":"Adding tests.",
            "name":"white-check-mark",
            "cc_prefix": "test"
        },
        {
            "emoji":"🔒",
            "entity":"&#x1f512;",
            "code":":lock:",
            "description":"Fixing security issues.",
            "name":"lock",
            "cc_prefix": "fix"
        },
        {
            "emoji":"🍎",
            "entity":"&#x1f34e;",
            "code":":apple:",
            "description":"Fixing something on macOS.",
            "name":"apple",
            "cc_prefix": "fix"
        },
        {
            "emoji":"🐧",
            "entity":"&#x1f427;",
            "code":":penguin:",
            "description":"Fixing something on Linux.",
            "name":"penguin",
            "cc_prefix": "fix"
        },
        {
            "emoji":"🏁",
            "entity":"&#x1f3c1;",
            "code":":checkered_flag:",
            "description":"Fixing something on Windows.",
            "name":"checkered-flag",
            "cc_prefix": "fix"
        },
        {
            "emoji":"🤖",
            "entity":"&#129302;",
            "code":":robot:",
            "description":"Fixing something on Android.",
            "name":"robot",
            "cc_prefix": "fix"
        },
        {
            "emoji":"🍏",
            "entity":"&#127823;",
            "code":":green_apple:",
            "description":"Fixing something on iOS.",
            "name":"green-apple"
        },
        {
            "emoji":"🔖",
            "entity":"&#x1f516;",
            "code":":bookmark:",
            "description":"Releasing / Version tags.",
            "name":"bookmark",
            "cc_prefix": "release"
        },
        {
            "emoji":"🚨",
            "entity":"&#x1f6a8;",
            "code":":rotating_light:",
            "description":"Removing linter warnings.",
            "name":"rotating-light",
            "cc_prefix": "refactor"
        },
        {
            "emoji":"🚧",
            "entity":"&#x1f6a7;",
            "code":":construction:",
            "description":"Work in progress.",
            "name":"construction"
        },
        {
            "emoji":"💚",
            "entity":"&#x1f49a;",
            "code":":green_heart:",
            "description":"Fixing CI Build.",
            "name":"green-heart",
            "cc_prefix": "ci"
        },
        {
            "emoji":"⬇️",
            "entity":"⬇️",
            "code":":arrow_down:",
            "description":"Downgrading dependencies.",
            "name":"arrow-down",
            "cc_prefix": "chore"
        },
        {
            "emoji":"⬆️",
            "entity":"⬆️",
            "code":":arrow_up:",
            "description":"Upgrading dependencies.",
            "name":"arrow-up",
            "cc_prefix": "chore"
        },
        {
            "emoji": "📌",
            "entity": "&#x1F4CC;",
            "code": ":pushpin:",
            "description": "Pinning dependencies to specific versions.",
            "name": "pushpin",
            "cc_prefix": "chore"
        },
        {
            "emoji":"👷",
            "entity":"&#x1f477;",
            "code":":construction_worker:",
            "description":"Adding CI build system.",
            "name":"construction-worker",
            "cc_prefix": "ci"
        },
        {
            "emoji":"📈",
            "code":":chart_with_upwards_trend:",
            "description":"Adding analytics or tracking code.",
            "name":"chart-with-upwards-trend"
        },
        {
            "emoji":"♻️",
            "entity":"&#x2672;",
            "code":":recycle:",
            "description":"Refactoring code.",
            "name":"recycle",
            "cc_prefix": "refactor"
        },
        {
            "emoji":"🐳",
            "entity":"&#x1f433;",
            "code":":whale:",
            "description":"Work about Docker.",
            "name":"whale"
        },
        {
            "emoji":"➕",
            "entity":"&#10133;",
            "code":":heavy_plus_sign:",
            "description":"Adding a dependency.",
            "name":"heavy-plus-sign",
            "cc_prefix": "chore"
        },
        {
            "emoji":"➖",
            "entity":"&#10134;",
            "code":":heavy_minus_sign:",
            "description":"Removing a dependency.",
            "name":"heavy-minus-sign",
            "cc_prefix": "chore"
        },
        {
            "emoji":"🔧",
            "entity":"&#x1f527;",
            "code":":wrench:",
            "description":"Changing configuration files.",
            "name":"wrench"
        },
        {
            "emoji": "🌐",
            "entity": "&#127760;",
            "code": ":globe_with_meridians:",
            "description": "Internationalization and localization.",
            "name": "globe-with-meridians"
        },
        {
            "emoji":"✏️",
            "entity":"&#59161;",
            "code":":pencil2:",
            "description":"Fixing typos.",
            "name":"pencil",
            "cc_prefix": "fix"
        },
        {
            "emoji":"💩",
            "entity":"&#58613;",
            "code":":hankey:",
            "description":"Writing bad code that needs to be improved.",
            "name":"hankey"
        },
        {
            "emoji":"⏪",
            "entity":"&#9194;",
            "code":":rewind:",
            "description":"Reverting changes.",
            "name":"rewind"
        },
        {
            "emoji":"🔀",
            "entity":"&#128256;",
            "code":":twisted_rightwards_arrows:",
            "description":"Merging branches.",
            "name":"twisted-rightwards-arrows",
            "cc_prefix": "chore"
        },
        {
            "emoji":"📦",
            "entity":"&#1F4E6;",
            "code":":package:",
            "description":"Updating compiled files or packages.",
            "name":"package",
            "cc_prefix": "build"
        },
        {
            "emoji":"👽",
            "entity":"&#1F47D;",
            "code":":alien:",
            "description":"Updating code due to external API changes.",
            "name":"alien"
        },
        {
            "emoji":"🚚",
            "entity":"&#1F69A;",
            "code":":truck:",
            "description":"Moving or renaming files.",
            "name":"truck"
        },
        {
            "emoji":"📄",
            "entity":"&#1F4C4;",
            "code":":page_facing_up:",
            "description":"Adding or updating license.",
            "name":"page-facing-up"
        },
        {
            "emoji":"💥",
            "entity":"&#x1f4a5;",
            "code":":boom:",
            "description":"Introducing breaking changes.",
            "name":"boom",
            "cc_prefix": "BREAKING:"
        },
        {
            "emoji":"🍱",
            "entity":"&#1F371",
            "code":":bento:",
            "description":"Adding or updating assets.",
            "name":"bento"
        },
        {
            "emoji":"👌",
            "entity":"&#x1f44c;",
            "code":":ok_hand:",
            "description":"Updating code due to code review changes.",
            "name":"ok-hand",
            "cc_prefix": "refactor"
        },
        {
            "emoji": "♿️",
            "entity":"&#9855;",
            "code": ":wheelchair:",
            "description":"Improving accessibility.",
            "name":"wheelchair"
        },
        {
            "emoji": "💡",
            "entity":"&#128161;",
            "code": ":bulb:",
            "description":"Documenting source code.",
            "name":"bulb",
            "cc_prefix": "doc"
        },
        {
            "emoji": "🍻",
            "entity":"&#x1f37b;",
            "code": ":beers:",
            "description": "Writing code drunkenly.",
            "name":"beers"
        },
        {
            "emoji": "💬",
            "entity":"&#128172;",
            "code": ":speech_balloon:",
            "description": "Updating text and literals.",
            "name":"speech-balloon"
        },
        {
            "emoji": "🗃",
            "entity":"&#128451;",
            "code": ":card_file_box:",
            "description": "Performing database related changes.",
            "name":"card-file-box",
            "cc_prefix": "refactor"
        },
        {
            "emoji":"🔊",
            "entity":"&#128266;",
            "code":":loud_sound:",
            "description":"Adding logs.",
            "name":"loud-sound"
        },
        {
            "emoji":"🔇",
            "entity":"&#128263;",
            "code":":mute:",
            "description":"Removing logs.",
            "name":"mute"
        },
        {
            "emoji": "👥",
            "entity": "&#128101;",
            "code": ":busts_in_silhouette:",
            "description": "Adding contributor(s).",
            "name": "busts-in-silhouette"
        },
        {
            "emoji": "🚸",
            "entity": "&#128696;",
            "code": ":children_crossing:",
            "description": "Improving user experience / usability.",
            "name": "children-crossing",
            "cc_prefix": "refactor"
        },
        {
            "emoji": "🏗",
            "entity": "&#1f3d7;",
            "code": ":building_construction:",
            "description": "Making architectural changes.",
            "name": "building-construction",
            "cc_prefix": "refactor"
        },
        {
            "emoji": "📱",
            "entity": "&#128241;" ,
            "code": ":iphone:",
            "description": "Working on responsive design.",
            "name": "iphone",
            "cc_prefix": "style"
        },
        {
            "emoji": "🤡",
            "entity": "&#129313;" ,
            "code": ":clown_face:",
            "description": "Mocking things.",
            "name": "clown-face",
            "cc_prefix": "test"
        },
        {
            "emoji": "🥚",
            "entity": "&#129370;",
            "code": ":egg:",
            "description": "Adding an easter egg.",
            "name": "egg"
        },
        {
            "emoji": "🙈",
            "entity": "&#8bdfe7;" ,
            "code": ":see_no_evil:",
            "description": "Adding or updating a .gitignore file",
            "name": "see-no-evil"
        },
        {
            "emoji": "📸",
            "entity": "&#128248;" ,
            "code": ":camera_flash:",
            "description": "Adding or updating snapshots",
            "name": "camera-flash"
        },
        {
            "emoji": "⚗",
            "entity": "&#128248;" ,
            "code": ":alembic:",
            "description": "Experimenting new things",
            "name": "alembic",
            "cc_prefix": "test"
        },
        {
            "emoji": "🔍",
            "entity": "&#128269;" ,
            "code": ":mag:",
            "description": "Improving SEO",
            "name": "mag"
        },
        {
          "emoji":"☸️",
          "entity":"&#9784;",
          "code":":wheel_of_dharma:",
          "description":"Work about Kubernetes",
          "name":"wheel-of-dharma"
        },
        {
          "emoji": "🏷️",
          "entity": "&#127991;",
          "code": ":label:",
          "description": "Adding or updating types (Flow, TypesScript)",
          "name": "label"
        }
]

export default getMergedConfig
