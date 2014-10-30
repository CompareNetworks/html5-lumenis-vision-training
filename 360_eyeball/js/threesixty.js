threeSixty = {
    init: function() {
        this._vr = new AC.VR('viewer', 'images/Eyeball_720_rotate_#####.jpg', 200, {
            invert: false,
            initialPos: 60,
            autoPlay: true,
            noCache: true
        });
    },
    didShow: function() {
        this.init();
    },
    willHide: function() {
        recycleObjectValueForKey(this, "_vr");
    },
    shouldCache: function() {
        return false;
    }
}
if (!window.isLoaded) {
    window.addEventListener("load", function() {
        threeSixty.init();
    }, false);
}
