module.exports = {
  name: 'ping',
  description: 'asdasd',
  execute(message, args) {
    message.channel.send('pong!');
  }
}