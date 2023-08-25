//import { DropdownList } from '@/components/DropdownList'
//import { Textarea, TextInput } from '@/components/inputs'
import { TextInput } from '@/components/inputs'
//import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { TableListItemProps } from '@/components/TableList'
import { Stack } from '@chakra-ui/react'
//import { Variable } from '@typebot.io/schemas'
import {
  ChatCompletionOpenAIOptions,
} from '@typebot.io/schemas/features/blocks/integrations/openai'

type Props = TableListItemProps<ChatCompletionOpenAIOptions['functions'][number]>

export const ChatCompletionFunctionItem = ({ item, onItemChange }: Props) => {
  
    const updateName = (name: string) => {
        onItemChange({ ...item, name })
    }

  return (
    <Stack p="4" rounded="md" flex="1" borderWidth="1px">
      <TextInput
        defaultValue={item.name}
        onChange={updateName}
        placeholder="Name"
        />
    </Stack>
  )
}
