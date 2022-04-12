import { getAddress } from "ethers/lib/utils";

export async function ensToAddress(ensAddress: string) {
  try {
    let resp = await fetch(
      "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json"
        },
        body:
          '{"query":"{\\n  domains(where:{name:\\"' +
          ensAddress +
          '\\"}) {\\n    resolvedAddress {\\n      id\\n    }\\n  }\\n}\\n","variables":null}',
        method: "POST"
      }
    ).then((r) => {
      return r.json();
    });

    if (Boolean(resp["data"]["domains"][0]["resolvedAddress"]) === false) {
      return false;
    } else {
      return getAddress(resp["data"]["domains"][0]["resolvedAddress"]["id"]);
    }
  } catch (error) {
    console.log("ensToAddress.error", error);
    return false;
  }
}

export async function addressToEns(address: string) {
  try {
    let resp = await fetch(
      "https://api.thegraph.com/subgraphs/name/ensdomains/ens",
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          query: `
                    {
                        domains(where: {resolvedAddress: "${address.toLowerCase()}"}) {
                          name
                        }
                    }`,
          variables: null
        }),
        method: "POST"
      }
    ).then((r) => {
      return r.json();
    });

    if (Boolean(resp["data"]["domains"].length) === false) {
      return false;
    } else {
      return resp["data"]["domains"][resp["data"]["domains"].length - 1]?.name;
    }
  } catch (error) {
    console.log("addressToEns.error", error);
    return false;
  }
}
