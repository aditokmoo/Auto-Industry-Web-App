import { useGetUserConversations } from '../../hooks/useChat';
import ChatList from './components/ChatList/ChatList';
import FilterChat from './components/FilterChat/FilterChat';
import SearchChat from './components/SearchChat/SearchChat';
import styles from './MessageSidebar.module.scss';

export default function MessageSidebar() {
    const { data: userConversations, isLoading: isLoadingUserConversations } = useGetUserConversations();

    if (isLoadingUserConversations) return <h2>Loading...</h2>

    return (
        <div className={styles.sidebar}>
            <SearchChat />
            <FilterChat />
            <ChatList conversations={userConversations?.conversations} />
        </div>
    )
}