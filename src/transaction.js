/** 
 *  @constructor
 *  @extends Floatable
 */
function Transaction(dogecoins, highlight, currency, currencyName) {
	if (document.visibilityState === "visible") {
		Floatable.call(this);
		this.area = dogecoins/1;
		var minSize = 75;
		var maxSize = 800;
		this.width = this.height = Math.sqrt(this.area / Math.PI)*1;
		if(this.width > maxSize){
			this.width = this.height = maxSize;
		}

		if(this.width < minSize){
			this.width = this.height = minSize;
		}
		
		this.addImage(bubbleImage, this.width, this.height);
	
		var dogecoinString = "&ETH;" + dogecoins.toFixed(2);
	
		if (dogecoinString == "&ETH;0.00")
		dogecoinString = "<&ETH;0.01";
	
		if (!highlight) {
			this.addText(dogecoinString);
		} else {
			this.addText('<span style="color: yellow;">' + dogecoinString + '</span><br /><span style="color: cyan;">Donation</span><br /><span style="color: lime;">Thanks!</span>');
		}
		if (currency && currencyName) {
			this.addText('<br />' + currency.toFixed(2) + ' ' + currencyName);
		}
		this.initPosition();
	}


	// Sound
	var maxDogecoins = 1000000;
	var minVolume = 0.3;
	var maxVolume = 0.7;
	var volume = dogecoins / (maxDogecoins / (maxVolume - minVolume)) + minVolume;
	if (volume > maxVolume)
		volume = maxVolume;
	
	var maxPitch = 100.0;
	// We need to use a log that makes it so that maxDogecoins reaches the maximum pitch.
	// Well, the opposite of the maximum pitch. Anyway. So we solve:
	// maxPitch = log(maxDogecoins + logUsed) / log(logUsed)
	// For maxPitch = 100 (for 100%) and maxDogecoins = 1000, that gives us...
	var logUsed = 1.0715307808111486871978099;
	// So we find the smallest value between log(dogecoins + logUsed) / log(logUsed) and our max pitch...
	var pitch = Math.min(maxPitch, Math.log(dogecoins + logUsed) / Math.log(logUsed));
	// ...we invert it so that a bigger transaction = a deeper noise...
	pitch = maxPitch - pitch;
	// ...and we play the sound!
	if(globalScalePitch) {
		Sound.playPitchAtVolume(volume, pitch);
	} else {
		Sound.playRandomAtVolume(volume);
	}
}

extend(Floatable, Transaction);
