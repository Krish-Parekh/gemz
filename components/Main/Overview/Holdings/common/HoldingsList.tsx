import React from "react";
import { FlatList } from "@gluestack-ui/themed";

import { type IHoldingsCard } from "../Holdings";

import HoldingsCard from "./HoldingsCard";

const holdingsData: IHoldingsCard[] = [
  {
    id: 1,
    name: "LGT BANK (SINGAPORE) LTD",
    account_number: "LGT-601125-188",
    account_type: "position",
    relationship_number: "LGT-601125-188",
    currency: "SGD",
  },
  {
    id: 2,
    name: "LGT BANK (SINGAPORE) LTD",
    account_number: "LGT-601125-188",
    account_type: "position",
    relationship_number: "LGT-601125-188",
    currency: "SGD",
  },
  {
    id: 3,
    name: "LGT BANK (SINGAPORE) LTD",
    account_number: "LGT-601125-188",
    account_type: "position",
    relationship_number: "LGT-601125-188",
    currency: "SGD",
  },
];

export default function HoldingsList() {
  return (
    <FlatList
      data={holdingsData}
      renderItem={({ item }: { item: IHoldingsCard }) => (
        <HoldingsCard data={item} />
      )}
      keyExtractor={(item: IHoldingsCard) => item.id}
    />
  );
}
