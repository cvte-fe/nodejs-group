const main = () => {

    setImmediate(() => {
        console.log('immediate emit!')
    })


    setTimeout(function() {
        console.log('settimeout emit!')

        setImmediate(() => {
            console.log('immediate emit in settimeout!')
        })

        process.nextTick(function() {
            console.log('nextTick emit in settimeout!')
        })

    }, 0)


    process.nextTick(function() {
        console.log('nextTick emit!')
    })

    console.log('main emit!')
}

main()