const main = () => {

    setImmediate(() => {
        console.log('immediate emit!')
    })


    setTimeout(function() {
        console.log('settimeout emit!')
        // setTimeout(arguments.callee, 0)
        process.exit()
    }, 0)


    process.nextTick(function() {
        console.log('nextTick emit!')
        process.nextTick(arguments.callee)
    })

    console.log('main emit!')
}

main()