module.exports =
{
	"playback": {
		"play": {"key": "play", "description": "Start / Resume"},
		"pause": "Pause",
		"stop": "Stop",
		"skipPrevious": "Skip to previous item",
		"skipNext": "Skip to next item",
		"stepBack": "seeks back 15 seconds (or the expected platform value)",
		"stepForward": "seeks forward 30 seconds (or the expected platform value)",
		"setVolume": {"key": "setParameters", "attribute": "volume", "default": 0, "description": "set Volume"},
		"setShuffle": {"key": "setParameters", "attribute": "shuffle", "default": 0, "values": {"0": "off", "1": "on"}, "description": "set Shuffle"},
		"setRepeat": {"key": "setParameters", "attribute": "repeat", "default": 0, "values": {"0": "off", "1": "item", "2": "all"}, "description": "set Repeat"},
		"seekTo": {"attribute": "offset", "default": 0, "description": "set Offset (in milliseconds)"}
	},
	
	"navigation": {
		"moveUp": "Move selection up",
		"moveDown": "Move selection down",
		"moveLeft": "Move selection left",
		"moveRight": "Move selection right",
		"select": "Select focused element",
		"back": "Go back"
	},
	
	"mirror": {
		"details": "Show the pre-play screen for a specific item"
	}
}