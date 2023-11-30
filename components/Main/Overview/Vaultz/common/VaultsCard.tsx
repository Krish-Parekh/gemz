import React from 'react'
import { Badge, HStack, Icon, Text, VStack, BadgeText } from "@gluestack-ui/themed";
import { Alert, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Trash } from 'lucide-react-native';


const statusColorMapping: any = {
    pending: "error",
    processing: "warning",
    completed: "success",
};

const VaultsCard = ({ data }: any) => {
    const { name, custodian, status, report_date, account_number } = data
    const badgeAction = statusColorMapping[status];

    return (
        <VStack style={styles.card}>
            <HStack style={styles.headerContainer}>
                <Text style={styles.headerText}>{name} - {custodian}</Text>
                <HStack style={styles.iconContainer}>

                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                "Delete Estate",
                                "Are you sure you want to delete this estate?"
                            );
                        }}
                    >
                        <Icon as={Trash} />
                    </TouchableOpacity>
                </HStack>
            </HStack>
            <VStack style={styles.itemContainer} space="md">
                <HStack>
                    <Text style={styles.label}>Account Number -</Text>
                    <Text style={styles.value}>{account_number}</Text>
                </HStack>
                <HStack style={styles.items}>
                    <Text>
                        <Text style={styles.label}>Date Created -</Text>
                        <Text style={styles.value}>{report_date}</Text>
                    </Text>
                    <Badge size="md" variant="solid" borderRadius="$none" action={badgeAction}>
                        <BadgeText style={styles.value}>{status}</BadgeText>
                    </Badge>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default VaultsCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 4,
        marginHorizontal: 4,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    headerContainer: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    iconContainer: {
        flexDirection: "row",
        gap: 16,
    },
    itemContainer: {
        padding: 12,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
    },
    value: {
        fontSize: 12,
    },
    items: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
