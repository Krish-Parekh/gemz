import React from 'react'
import { FlatList } from "@gluestack-ui/themed";
import VaultsCard from './VaultsCard';

const vaultzData= [
    {
        id: 1,
        name: "Retirement",
        custodian:"HSBC Bank Statement",
        account_number:"12345678",
        report_date:"2023-10-01",
        status:"pending"
    },
    {
        id: 2,
        name: "Retirement",
        custodian:"HSBC Bank Statement 2",
        account_number:"1234567",
        report_date:"2023-10-02",
        status:"processing"
    },
    {
        id: 3,
        name: "Retirement",
        custodian:"HSBC Bank Statement3",
        account_number:"123456",
        report_date:"2023-10-03",
        status:"completed"
    }
]

const VaultzList = () => {
  return (
    <FlatList
      data={vaultzData}
      renderItem={({ item }: { item: any }) => (
        <VaultsCard data={item}/>
      )}
      keyExtractor={(item: any) => item.id}
    />
  )
}

export default VaultzList