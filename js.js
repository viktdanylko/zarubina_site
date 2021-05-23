function dark() {
    var chbox;
    chbox=document.getElementById('check');
        if (chbox.checked) {
    
        $("#nav").addClass("bg-dark");
        $("#nav").addClass("navbar-dark");
        $("#carouselExampleControls").addClass("darker")
        $("#carouselExampleIndicators").addClass("darker")
        $("#score").addClass("table-dark")
        $("#map").addClass("dark-map")
        $("#bo").addClass("dark-bo")
        $("#texter").addClass("dark-te")
        $("#me").removeClass("bla")
        $("#me").addClass("bla-dark")
        $("#ssilka").addClass("dark-li")
        }
        else {
        $("#nav").removeClass("bg-dark");
        $("#nav").removeClass("navbar-dark");
        $("#img").removeClass("darker")
        $("#carouselExampleControls").removeClass("darker")
        $("#carouselExampleIndicators").removeClass("darker")
        $("#score").removeClass("table-dark")
        $("#bo").removeClass("dark-bo")
        $("#text").removeClass("dark-map")
        $("#texter").removeClass("dark-te")
        $("#map").removeClass("dark-map")
        $("#me").removeClass("darker")
        $("#me").addClass("bla")
        $("#me").removeClass("bla-dark")
        $("#ssilka").removeClass("dark-li")
        }
    }
