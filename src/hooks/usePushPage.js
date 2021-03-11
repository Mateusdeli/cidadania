import { useRouter } from 'next/router'

export default function usePushPage(routeName) {
    const router = useRouter()

    function handlePush() {
        router.push(routeName)
    }

    return { handlePush }
}