const createTestCafe = require('testcafe');
const allure = require('allure-commandline');

(async () => {
    const testcafe = await createTestCafe('localhost', 1337, 1338);

    try {
        const runner = testcafe.createRunner();

        const failedCount = await runner
            .src(['./src/tests/*.ts'])
            .browsers(['chrome'])
            .reporter('allure')
            .screenshots('./allure/screenshots', true)
            .run({
                skipJsErrors: true,
                disableMultipleWindows: true,
                skipUncaughtErrors: true,
                selectorTimeout: 10000,
                assertionTimeout: 10000,
                pageLoadTimeout: 40000
            });

        testcafe.close();

        const generation = allure(['generate', 'allure/allure-results', '-o', 'allure/allure-report', '--clean']);
        await new Promise((resolve) => {
            generation.on('exit', function (exitCode) {
                console.log('Generation is finished with code:', exitCode);
            });
        });

        if (failedCount) {
            process.exit(1);
        } else {
            process.exit(0);
        }

    } catch (err) {
        console.log(err);
        testcafe.close();
        process.exit(1);
    }
})();