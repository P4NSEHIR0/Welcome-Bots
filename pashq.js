const Discord = require('discord.js');
const ayarlar = require("./pashq.json");

const tokens = [
    "BOT TOKENLERI"
];

const chnls = [ayarlar.chnls];

const selamlı = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(process.env.token);

    let concon;
    client.on('ready', async () => {
        client.user.setStatus("idle");
        console.log(client.user.username);
        setInterval(() => {
            const am = [
             "Developed by Pashq"

            ];
        const yarrak = Math.floor(Math.random() * (am.length));
        client.user.setActivity(`${am[yarrak]}`, {type: "LISTENING"});
    }, 10000);
        concon = await client.channels.cache.get(chnls[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls[index])) {
            if (cur.channelID === prev.channelID) return;
            if (selamlı.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                return;
            }
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                selamlı.push(cur.member.user.id);
                console.log(selamlı);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition) {
                ses = await concon.play('./yt.mp3');
                selamlı.push(cur.member.user.id);
                console.log(selamlı);
            }
        }
        if (prev.channel && (prev.channel.id === chnls[index]) && (prev.channel.members.size === 1) && ses) ses.end();
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls[index]).join();
    })

    client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfDeaf
        ) {
        newState.setSelfDeaf(true);
        }
        });

}

///////////////////// 2 welcome ////////////////////////

const tokenss = [
    "BOT TOKENLERI"
];

const chnls2 = [ayarlar.chnls2];

const sselamlı = [];
for (let index = 0; index < tokenss.length; index++) {
    const token = tokenss[index];
    const client = new Discord.Client();
    client.login(process.env.token2);

    let concon;
    client.on('ready', async () => {
        client.user.setStatus("idle");
        console.log(client.user.username);
        setInterval(() => {
            const am = [
             "Developed by Pashq"

            ];
        const yarrak = Math.floor(Math.random() * (am.length));
        client.user.setActivity(`${am[yarrak]}`, {type: "LISTENING"});
    }, 10000);
        concon = await client.channels.cache.get(chnls2[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls2[index])) {
            if (cur.channelID === prev.channelID) return;
            if (sselamlı.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                return;
            }
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                sselamlı.push(cur.member.user.id);
                console.log(sselamlı);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition) {
                ses = await concon.play('./yt.mp3');
                sselamlı.push(cur.member.user.id);
                console.log(sselamlı);
            }
        }
        if (prev.channel && (prev.channel.id === chnls2[index]) && (prev.channel.members.size === 1) && ses) ses.end();
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls2[index]).join();
    })

    client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfDeaf
        ) {
        newState.setSelfDeaf(true);
        }
        });

}

///////////////////// 3 welcome ////////////////////////

const tokensss = [
    "BOT TOKENLERI"
];

const chnls3 = [ayarlar.chnls3];

const ssselamlı = [];
for (let index = 0; index < tokenss.length; index++) {
    const token = tokenss[index];
    const client = new Discord.Client();
    client.login(process.env.token3);

    let concon;
    client.on('ready', async () => {
        client.user.setStatus("idle");
        console.log(client.user.username);
        setInterval(() => {
            const am = [
             "Developed by Pashq"

            ];
        const yarrak = Math.floor(Math.random() * (am.length));
        client.user.setActivity(`${am[yarrak]}`, {type: "LISTENING"});
    }, 10000);
        concon = await client.channels.cache.get(chnls3[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls3[index])) {
            if (cur.channelID === prev.channelID) return;
            if (ssselamlı.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                return;
            }
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                ssselamlı.push(cur.member.user.id);
                console.log(ssselamlı);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition) {
                ses = await concon.play('./yt.mp3');
                ssselamlı.push(cur.member.user.id);
                console.log(ssselamlı);
            }
        }
        if (prev.channel && (prev.channel.id === chnls3[index]) && (prev.channel.members.size === 1) && ses) ses.end();
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls3[index]).join();
    })

    client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfDeaf
        ) {
        newState.setSelfDeaf(true);
        }
        });

}

///////////////////// 4 welcome ////////////////////////

const tokenssss = [
    "BOT TOKENLERI"
];

const chnls4 = [ayarlar.chnls4];

const sssselamlı = [];
for (let index = 0; index < tokenss.length; index++) {
    const token = tokenss[index];
    const client = new Discord.Client();
    client.login(process.env.token4);

    let concon;
    client.on('ready', async () => {
        client.user.setStatus("idle");
        console.log(client.user.username);
        setInterval(() => {
            const am = [
             "Developed by Pashq"

            ];
        const yarrak = Math.floor(Math.random() * (am.length));
        client.user.setActivity(`${am[yarrak]}`, {type: "LISTENING"});
    }, 10000);
        concon = await client.channels.cache.get(chnls4[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls4[index])) {
            if (cur.channelID === prev.channelID) return;
            if (sssselamlı.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                return;
            }
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                sssselamlı.push(cur.member.user.id);
                console.log(sssselamlı);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition) {
                ses = await concon.play('./yt.mp3');
                sssselamlı.push(cur.member.user.id);
                console.log(sssselamlı);
            }
        }
        if (prev.channel && (prev.channel.id === chnls4[index]) && (prev.channel.members.size === 1) && ses) ses.end();
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls4[index]).join();
    })

    client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfDeaf
        ) {
        newState.setSelfDeaf(true);
        }
        });

}

const tokensssss = [
    "BOT TOKENLERI"
];

const chnls5 = [ayarlar.chnls5];

const ssssselamlı = [];
for (let index = 0; index < tokensssss.length; index++) {
    const token = tokenss[index];
    const client = new Discord.Client();
    client.login(process.env.token5);

    let concon;
    client.on('ready', async () => {
        client.user.setStatus("idle");
        console.log(client.user.username);
        setInterval(() => {
            const am = [
             "Developed by Pashq"

            ];
        const yarrak = Math.floor(Math.random() * (am.length));
        client.user.setActivity(`${am[yarrak]}`, {type: "LISTENING"});
    }, 10000);
        concon = await client.channels.cache.get(chnls5[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls5[index])) {
            if (cur.channelID === prev.channelID) return;
            if (ssssselamlı.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                return;
            }
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition)) {
                ses = await concon.play('./welcome.mp3');
                ssssselamlı.push(cur.member.user.id);
                console.log(ssssselamlı);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get(ayarlar.enaltyetkili).rawPosition) {
                ses = await concon.play('./yt.mp3');
                ssssselamlı.push(cur.member.user.id);
                console.log(ssssselamlı);
            }
        }
        if (prev.channel && (prev.channel.id === chnls5[index]) && (prev.channel.members.size === 1) && ses) ses.end();
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls5[index]).join();
    })

    client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfDeaf
        ) {
        newState.setSelfDeaf(true);
        }
        });

}
