/************************************/
/* Authz NFT minter to mint NFTs on OmniFlix
/* Dev by harish551 for OmniFlix Team */
/* Run: node --experimental-modules --es-module-specifier-resolution=node mint_nfts.js */
/************************************/

import { genUniqueID, mintNft } from './helpers/mint_nft_helper.js'

( async () => {
    const sampleMessage1 = {
        id: genUniqueID('onft'),
        denomId: 'onftdenom3a9e32fb1079408d8537562666497ef4',
        metadata: {
            name: "AR EMOJI SPL",
            description: "AR EMOJI SPL",
            mediaUri: "ipfs//:QmVaBATqyz7sbKTDN4YZ19gr5fMkW7KM2sJNjmt5Y51Jmq",
            previewUri: "https://ipfs.omniflix.studio/ipfs/QmVaBATqyz7sbKTDN4YZ19gr5fMkW7KM2sJNjmt5Y51Jmq"
        },
        data: "{\"id\":\"spl1\"}",
        transferable: true,
        extensible: true,
        nsfw: false,
        royaltyShare: "200000000000000000",
        sender: "omniflix1fgs9gudt8ltlnv5yymzjhcafycltw2tz85rx0t",
        recipient: "omniflix1yple8ey7zlfthgyjekkpxfhxx4z40qs3jyjprv",
    }
    const sampleMessage2 = {
        id: genUniqueID('onft'),
        denomId: 'onftdenom3a9e32fb1079408d8537562666497ef4',
        metadata: {
            name: "AR EMOJI SPL",
            description: "AR EMOJI SPL",
            mediaUri: "ipfs//:QmVaBATqyz7sbKTDN4YZ19gr5fMkW7KM2sJNjmt5Y51Jmq",
            previewUri: "https://ipfs.omniflix.studio/ipfs/QmVaBATqyz7sbKTDN4YZ19gr5fMkW7KM2sJNjmt5Y51Jmq"
        },
        data: "{\"id\":\"spl1\"}",
        transferable: true,
        extensible: true,
        nsfw: false,
        royaltyShare: "200000000000000000", // "0.2"
        sender: "omniflix1fgs9gudt8ltlnv5yymzjhcafycltw2tz85rx0t",
        recipient: "omniflix1yca6mlzq9xvnmmylw0asfjhz0q483pw57pj79v",
    }

    const result = await mintNft([sampleMessage1, sampleMessage2])
    console.log(result.success)
    console.log(result.result)
})()
