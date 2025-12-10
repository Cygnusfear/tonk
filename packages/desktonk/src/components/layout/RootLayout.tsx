import { Outlet } from 'react-router-dom';
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { useMembersBar } from '@/features/members-bar/stores/membersBarStore';
import { MembersBar } from '@/features/members-bar/components/MembersBar';
import { Dock } from '@/features/dock';

export function RootLayout() {
  const showMembersBar = useFeatureFlag('showMembersBar');
  const { isOpen } = useMembersBar();

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Main content area */}
      <div className="flex-1 min-w-0 overflow-auto z-0 w-40">
        <Outlet />
      </div>

      {/* Members bar */}
      {showMembersBar && isOpen && <MembersBar />}

      {/* Dock */}
      <Dock />
    </div>
  );
}
