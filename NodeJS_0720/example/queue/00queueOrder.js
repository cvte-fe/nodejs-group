const main = () => {

    setTimeout(function() {
        console.log('01settimeout emit!')
    }, 0)

    setTimeout(function() {
        console.log('02settimeout emit!')
    }, 0)

    console.log('00main emit!')
}

main()