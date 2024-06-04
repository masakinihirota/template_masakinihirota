import { Terminal } from 'lucide-react';
import Link from 'next/link';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { Button } from './button/Button';

export default function Page() {
  return (
    <div className="">
      {/* <PricingPage /> */}
      <br />
      <a href="/ja">日本語ページ</a>
      <br />
      <a href="/en">English Page</a>
      <Alert>
        <Terminal className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      <Link href="./ModeTogglePage">ButtonTestPage</Link>
      <Button label="Storybook Test Button" />

      {/* userTestページへのリンク */}
      {/* テストなのでハードコーディングのリンク */}
      <Link href="/ja/userTest">userTest</Link>
      <br />
      <br />
      <Link href="./ja/examples/client-component">
        Client Component Example
      </Link>
      <br />
    </div>
  );
}
