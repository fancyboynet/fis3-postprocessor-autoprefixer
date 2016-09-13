# fis3-postprocessor-autoprefixer
fis3 plugin for css prefixer, use autoprefixer

## install
    
    $ npm install git+ssh://git@github.com:fancyboynet/fis3-postprocessor-autoprefixer.git
    
## usage

    fis.match('**.css', {
        postprocessor: fis.plugin('autoprefixer', {
            "browsers": ["last 2 versions", "Android >= 4.0", "UCAndroid"]
        })
    });