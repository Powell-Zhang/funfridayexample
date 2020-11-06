module.exports = {
  name: 'mod',
  description: '',
  execute(message, args) {
		let role = message.guild.roles.cache.find(role => role.name === 'mod');
		if (message.member.roles.cache.some(role => role.name === 'mod')){
      message.member.roles.remove(role);
    }
		else {
			message.member.roles.add(role);
		}
  }
}