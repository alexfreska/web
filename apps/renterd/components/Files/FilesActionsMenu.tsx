import {
  Button,
  CloudUpload16,
  FolderAdd16,
  PaginatorKnownTotal,
  Search16,
} from '@siafoundation/design-system'
import { useFiles } from '../../contexts/files'
import { useDropzone } from 'react-dropzone'
import { FilesViewDropdownMenu } from './FilesViewDropdownMenu'
import { useDialog } from '../../contexts/dialog'

export function FilesActionsMenu() {
  const { openDialog } = useDialog()
  const { onDrop, dataState, offset, limit, datasetCount, pageCount } =
    useFiles()

  const { getRootProps, getInputProps } = useDropzone({ noDrag: true, onDrop })

  return (
    <div className="flex gap-2">
      <PaginatorKnownTotal
        isLoading={dataState === 'loading'}
        offset={offset}
        limit={limit}
        datasetTotal={datasetCount}
        pageTotal={pageCount}
      />
      <Button onClick={() => openDialog('filesSearch')}>
        <Search16 />
      </Button>
      <Button {...getRootProps()}>
        <input {...getInputProps()} />
        <CloudUpload16 />
      </Button>
      <Button onClick={() => openDialog('filesCreateDirectory')}>
        <FolderAdd16 />
      </Button>
      <FilesViewDropdownMenu />
    </div>
  )
}
