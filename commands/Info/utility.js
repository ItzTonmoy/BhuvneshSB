const{Client:Client,Message:Message,MessageEmbed:MessageEmbed}=require("discord.js-selfbot"),{send:send}=require("../../Utility/functions");module.exports={name:"utility",description:"All Utility Commands Here!",run:async(e,t,n)=>{try{const n=(new MessageEmbed).setColor(e.color).setFooter(`Made by ${e.owner.tag}`,e.owner.displayAvatarURL({dynamic:!0})),s=[...new Set(e.commands.map((e=>e.directory)))],i=s.map((t=>{const n=e.commands.filter((e=>e.directory===t)).map((({name:e,description:t})=>({name:e,description:t})));return{name:t,commands:n}})).find((e=>"Utility"===e.name));n.setAuthor("Bhuvneh Selfbot!"),n.setDescription(`**Total Utility Commands: ** **\`${i.commands.length}\`**`),n.addField("**__Utility__**",`${[...i.commands.map((({name:e,description:t})=>`**\`${e}\`** - ${t}`))].join("\n")}`),await send(t,n,e)}catch(e){throw new Error(e)}}};