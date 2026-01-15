longRunnongOperation(() => {
    anotherLongRunningOperation(() => {
        yetAnoter(() =>{
            oneMore(() => {
                lastOne (() => {
                    console.log("Where are we?");
                });
            });
        });
    });
});