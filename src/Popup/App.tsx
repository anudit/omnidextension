import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Flex,
  Heading,
  Input,
  useToast,
  Text,
  IconButton,
  Icon
} from "@chakra-ui/react";
import GaugeChart from "react-gauge-chart";
import { isAddress, getAddress } from "ethers/lib/utils";
import { ensToAddress } from "../utils/ens";
import { Convo } from "@theconvospace/sdk";
import { CloseIcon, ExternalLinkIcon, SearchIcon } from "@chakra-ui/icons";
import {
  HomeIcon,
  ReportIcon,
  OmnidIcon,
  TwitterIcon,
  EnsIcon
} from "../components/Icons";

export default function App() {
  const toast = useToast();
  const convo = new Convo("CSCpPwHnkB3niBJiUjy92YGP6xVkVZbWfK8xriDO");

  let [scoreData, setScoreData] = useState(false);
  let [loading, setLoading] = useState(false);
  let [currentText, setCurrentText] = useState("");
  let [activeIcon, setActiveIcon] = useState("search");
  const addressInput = useRef<HTMLInputElement>();

  async function refreshScoreData(override: boolean | string = false) {
    setLoading(true);
    const address =
      override == false ? (addressInput.current?.value as string) : override;
    console.log("fd", override, address);
    let parsedAddress = "";
    if (isAddress(address)) {
      parsedAddress = getAddress(address);
    } else if (address.endsWith(".eth")) {
      let ensResp = await ensToAddress(address);
      if (Boolean(ensResp) === true) {
        parsedAddress = ensResp as string;
      } else {
        setScoreData(false);
        toast({
          title: "Oops!",
          description: `${address} doesn't resolve to a valid Ethereum Address.`,
          status: "error",
          duration: 3000,
          isClosable: true
        });
      }
    } else {
      setScoreData(false);
      toast({
        title: "Oops!",
        description: "That does not look like a valid Ethereum Address",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }

    if (parsedAddress != "") {
      const resp = await convo.omnid.getTrustScore(parsedAddress);
      setScoreData(resp);
    }
    setLoading(false);
  }

  async function getTwitterUserData(username: string) {
    if (username != "") {
      let data = await fetch(
        `https://cnvsec.vercel.app/api/tuser?username=${username.replace(
          "@",
          ""
        )}`
      );
      let twitterData = await data.json();
      if (twitterData["success"] === true) {
        let name = twitterData["name"];
        let resp = name.match(/\w*.eth/g);
        if (resp && resp.length > 0) {
          refreshScoreData(resp[0]);
        } else {
          setScoreData(false);
          return false;
        }
      } else {
        setScoreData(false);
        return false;
      }
    }
  }

  useEffect(() => {
    //////// Search

    // Twitter Search
    if (currentText.startsWith("@")) {
      getTwitterUserData(currentText);
    }
    // ENS Search
    else if (isAddress(currentText) || currentText.endsWith(".eth")) {
      refreshScoreData();
    } else {
      setScoreData(false);
    }

    //////// Update Icon according to search

    if (currentText.startsWith("@")) {
      setActiveIcon("twitter");
    } else if (currentText.endsWith(".eth")) {
      setActiveIcon("ens");
    } else {
      setActiveIcon("search");
    }
  }, [currentText]);

  useEffect(() => {
    addressInput.current?.focus();
  }, []);

  return (
    <Flex
      height="400px"
      alignItems="center"
      align="center"
      direction="column"
      mx={4}
      my={2}
      borderRadius={2}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        direction="row"
        w="100%"
      >
        <IconButton
          icon={<HomeIcon />}
          variant="ghost"
          aria-label="Home Icon"
        />
        <Heading size="md">Omnid</Heading>
        <IconButton
          icon={<OmnidIcon />}
          variant="ghost"
          aria-label="Omnid Icon"
        />
      </Flex>
      <InputGroup py={2}>
        <InputLeftElement pointerEvents="none">
          {activeIcon === "search" && <SearchIcon color="gray.300" mt="15px" />}
          {activeIcon === "twitter" && (
            <TwitterIcon color="#1DA1F2" mt="15px" />
          )}
          {activeIcon === "ens" && <EnsIcon mt="15px" />}
        </InputLeftElement>
        <Input
          ref={addressInput}
          variant="outline"
          placeholder="Address / ENS / Twitter Username"
          textAlign="center"
          disabled={loading}
          onChange={(event) => {
            setCurrentText(event.target.value.trim());
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              refreshScoreData();
            }
          }}
        />
        {currentText != "" && (
          <InputRightElement
            cursor="pointer"
            children={
              <CloseIcon
                color="gray.300"
                mt="15px"
                onClick={() => {
                  let ele = addressInput.current as HTMLInputElement;
                  ele.value = "";
                  setScoreData(false);
                  setCurrentText("");
                }}
              />
            }
          />
        )}
      </InputGroup>
      <GaugeChart
        id="gauge-chart"
        percent={
          Boolean(scoreData) && "score" in scoreData
            ? Math.min(scoreData?.score, 101) / 100
            : 0
        }
        formatTextValue={(val) => {
          return val;
        }}
        arcsLength={[0.2, 0.3, 0.5]}
        colors={["#EA4228", "#F5CD19", "#5BE12C"]}
        arcPadding={0.01}
      />
      <Flex direction="row" justifyContent="space-evenly" w="100%">
        <Button
          disabled={!Boolean(scoreData)}
          leftIcon={<ExternalLinkIcon />}
          variant="outline"
          onClick={() => {
            window.open(`https://rainbow.me/${currentText}`);
          }}
        >
          View Profile
        </Button>
        <Button
          disabled={!Boolean(scoreData)}
          leftIcon={<ReportIcon />}
          variant="outline"
          onClick={() => {
            window.open(`https://omnidui.vercel.app/report/${currentText}`);
          }}
        >
          Report
        </Button>
      </Flex>
    </Flex>
  );
}
