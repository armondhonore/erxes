import { IconCircleCheck, IconCode, IconHash } from '@tabler/icons-react';
import { ColumnDef } from '@tanstack/table-core';
import {
  RecordTable,
  RecordTableInlineCell,
  TextOverflowTooltip,
} from 'erxes-ui';
import { useTranslation } from 'react-i18next';

import { MSDynamicCheckProduct } from '../types/msDynamicCheckProduct';

const CodeHeader = () => {
  const { t } = useTranslation('mongolian');
  return <RecordTable.InlineHead label={t('code')} icon={IconCode} />;
};
const NameHeader = () => {
  const { t } = useTranslation('mongolian');
  return <RecordTable.InlineHead label={t('name')} icon={IconHash} />;
};
const BarCodesHeader = () => {
  const { t } = useTranslation('mongolian');
  return <RecordTable.InlineHead label={t('bar-codes')} icon={IconHash} />;
};
const UnitPriceHeader = () => {
  const { t } = useTranslation('mongolian');
  return <RecordTable.InlineHead label={t('unit-price')} icon={IconHash} />;
};
const StatusHeader = () => {
  const { t } = useTranslation('mongolian');
  return <RecordTable.InlineHead label={t('status')} icon={IconCircleCheck} />;
};
const SyncedCell = ({ isSynced }: { isSynced: boolean }) => {
  const { t } = useTranslation('mongolian');
  return isSynced ? <span className="text-green-600 font-medium">{t('synced')}</span> : null;
};

export const msDynamicCheckProductColumns: ColumnDef<MSDynamicCheckProduct>[] =
  [
    RecordTable.checkboxColumn as ColumnDef<MSDynamicCheckProduct>,
    {
      id: 'code',
      accessorKey: 'displayCode',
      header: () => <CodeHeader />,
      cell: ({ cell }) => (
        <RecordTableInlineCell>
          <TextOverflowTooltip value={cell.getValue<string>()} />
        </RecordTableInlineCell>
      ),
    },
    {
      id: 'name',
      accessorKey: 'displayName',
      header: () => <NameHeader />,
      cell: ({ cell }) => (
        <RecordTableInlineCell>
          <TextOverflowTooltip value={cell.getValue<string>()} />
        </RecordTableInlineCell>
      ),
    },
    {
      id: 'barcodes',
      accessorKey: 'displayBarcodes',
      header: () => <BarCodesHeader />,
      cell: ({ cell }) => (
        <RecordTableInlineCell>
          <TextOverflowTooltip value={cell.getValue<string>()} />
        </RecordTableInlineCell>
      ),
    },
    {
      id: 'unitPrice',
      accessorKey: 'displayUnitPrice',
      header: () => <UnitPriceHeader />,
      cell: ({ cell }) => (
        <RecordTableInlineCell>
          <TextOverflowTooltip
            value={String(cell.getValue<string | number>())}
          />
        </RecordTableInlineCell>
      ),
    },
    {
      id: 'status',
      accessorKey: 'isSynced',
      header: () => <StatusHeader />,
      cell: ({ row }) => (
        <RecordTableInlineCell>
          <SyncedCell isSynced={row.original.isSynced} />
        </RecordTableInlineCell>
      ),
    },
  ];
