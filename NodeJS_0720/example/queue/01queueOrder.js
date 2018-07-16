const main = () => {

    setImmediate(() => {
        console.log('immediate emit!')
    })


    setTimeout(function() {
        console.log('settimeout emit!')
    }, 0)


    process.nextTick(function() {
        console.log('nextTick emit!')
    })

    console.log('main emit!')
}

main()