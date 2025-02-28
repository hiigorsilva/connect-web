'use client'

import { IconButton } from '@/components/ui/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'
import { CopyIcon, LinkIcon } from 'lucide-react'
import { toast } from 'sonner'

type InviteLinkCopyProps = {
  inviteLink: string
}

export const InviteLinkCopy = ({ inviteLink }: InviteLinkCopyProps) => {
  const handleCopyInviteLinkButton = () => {
    try {
      navigator.clipboard.writeText(inviteLink)
      toast.success('Link copiado com sucesso!')
    } catch (err) {
      console.error('ERROR_COPY_LINK', err)
      toast.error('Ocorreu um erro ao copiar o link')
    }
  }

  return (
    <InputRoot>
      <InputIcon>
        <LinkIcon className="size-4 shrink-0" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton onClick={handleCopyInviteLinkButton} className="-mr-2">
        <CopyIcon className="size-4 shrink-0" />
      </IconButton>
    </InputRoot>
  )
}
