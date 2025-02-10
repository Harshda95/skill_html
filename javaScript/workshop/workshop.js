function traficLight() {

    let signals = ["Green light is on", " Red light is on", " Yellow light is on"]
    let time = [5000, 4000, 2000]

    let i = 0;

    function change() {

        console.clear()
        console.log(signals[i]);

        setTimeout(() => {
            i=(i+1)%signals.length

            change()



        }, time[i]

        )


    }

    change()

} traficLight()