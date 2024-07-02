import React,{Suspense} from "react";
import Pagination from '@/app/ui/invoices/pagination';
import { fetchCustomerPages, fetchFilteredCustomers } from "@/app/lib/data";
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Table from '../../ui/customers/table';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const customers = await fetchFilteredCustomers(query);
  const totalPages = await fetchCustomerPages(query);

    return <div className="w-full">
     <Suspense fallback={<InvoicesTableSkeleton />}>
      <Table customers={customers} />
    </Suspense>
    <div className="mt-5 flex w-full justify-center">
      <Pagination totalPages={totalPages} />
    </div>
  </div>;
  }