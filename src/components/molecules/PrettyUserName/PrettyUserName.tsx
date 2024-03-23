import User from '~/src/types/User'

export interface PrettyUserNameProps {
  user: User
}

export default function PrettyUserName({ user }: PrettyUserNameProps) {
  return (
    <span>
      {user.firstName} {user.lastName}
    </span>
  )
}
