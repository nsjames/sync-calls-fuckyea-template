module.exports = async (deployer) => {
    await deployer.deploy(
        process.env.SYNC_ACCOUNT,
        'build/syncs',
        { addCode: true }
    ).catch(err => {
        console.error(err)
        process.exit(1);
    })
    await deployer.deploy(
        process.env.ACTION_ACCOUNT,
        'build/actions',
        { addCode: true }
    ).catch(err => {
        console.error(err)
        process.exit(1);
    })
}
