import User from '../User'
import buildMock from './buildMock'

const mockUser = buildMock<User>({
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'foo.bar@baz.com',
})

export default mockUser
