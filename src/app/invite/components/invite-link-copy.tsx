import { IconButton } from '@/components/ui/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'
import { CopyIcon, LinkIcon } from 'lucide-react'

export const InviteLinkCopy = () => {
  return (
    <InputRoot>
      <InputIcon>
        <LinkIcon className="size-4 shrink-0" />
      </InputIcon>
      <InputField defaultValue="devstage.com/codecraft-summit-2025/1289" />
      <IconButton className="-mr-2">
        <CopyIcon className="size-4 shrink-0" />
      </IconButton>
    </InputRoot>
  )
}
