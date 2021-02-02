document.addEventListener('DOMContentLoaded', function() {
    function smoothScroll(target, duration) {
        var target = document.getElementById(target)
        var targetPosition  = target.getBoundingClientRect().top
        var startPosition = window.pageYOffset
        var distance = targetPosition - startPosition
        var startTime = null

        function animationScroll(currentTime) {
            if (startTime === null) {
                startTime = currentTime
            }
            var timeElapsed = currentTime - startTime
            var run = ease(timeElapsed, startPosition, distance, duration)
            window.scrollTo(0,run)
            if (timeElapsed < duration) {
                requestAnimationFrame(animationScroll)
            }
        }

        
        function ease(t, b, c, d) {
            t /= d;
            return c*t*t*t*t + b;
        };

        requestAnimationFrame(animationScroll)
    }

    function smoothScroll2(target, duration) {
        var target = document.getElementById(target)
        var targetPosition  = target.getBoundingClientRect().bottom
        var startPosition = window.pageYOffset
        var distance = targetPosition - startPosition
        var startTime = null

        function animationScroll(currentTime) {
            if (startTime === null) {
                startTime = currentTime
            }
            var timeElapsed = currentTime - startTime
            var run = ease(timeElapsed, startPosition, distance, duration)
            window.scrollTo(0,run)
            if (timeElapsed < duration) {
                requestAnimationFrame(animationScroll)
            }
        }

        
        function ease(t, b, c, d) {
            t /= d;
            return c*t*t*t*t + b;
        };

        requestAnimationFrame(animationScroll)
    }
 
    document.getElementById('egypt-button').addEventListener('click', function () {
        smoothScroll('paris', 1000)
    })
    document.getElementById('paris-button').addEventListener('click', function () {
        smoothScroll2('lake', 1000)
    })
    document.getElementById('lake-button').addEventListener('click', function () {
        smoothScroll('egypt', 1000)
    })
    
})