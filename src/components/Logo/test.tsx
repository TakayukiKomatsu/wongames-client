import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a white label by default', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})

/**
 * Etapas de um teste:
 * 1. Renderizar o componente 'render'
 * 2. Selecionar o elemento a ser testado 'screen' (queries) - getByLabel..
 * 3. expect -assertion - comparação - análise
 */
