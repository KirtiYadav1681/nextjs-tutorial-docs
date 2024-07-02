import React,{Suspense} from "react";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Table from '../../ui/customers/table';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

    return <div className="w-full">
     <Suspense fallback={<InvoicesTableSkeleton />}>
      <Table customers={customers} />
    </Suspense>
  </div>;
  }