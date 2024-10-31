import { create } from "zustand"
import { Cryptocurrency } from "./types"
import { devtools } from "zustand/middleware"
import { getCryptos } from "./services/cryptoService"

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCrytos: () => Promise<void>

}


export const useCrytoStore = create<CryptoStore>()(devtools((set) =>({
    cryptocurrencies:[],
    fetchCrytos: async() => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))

    }
})))