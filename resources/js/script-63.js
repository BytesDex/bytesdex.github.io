       document.getElementById('retry-button').style.display = 'none';

        setTimeout(function() {
            document.getElementById('retry-button').style.display = 'block';
        }, 2000);

        document.getElementById('retry-button').addEventListener('click', function() {
            document.getElementById('retry-button').style.display = 'none';
            document.getElementById('loading-gif').style.display = 'block';
            setTimeout(function() {
                document.getElementById('loading-gif').style.display = 'none';
                document.getElementById('error-alert').style.display = 'block';
            }, 3000);
        });
