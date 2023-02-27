import { render, waitFor, act } from "@testing-library/react";
import  userEvent  from "@testing-library/user-event"
import List from "./List";

describe('List Component', () => {
    it('should render list items', async () => {
        const { getByText, rerender, queryByText, unmount } = render(<List initialItems={['Giovanni', 'Miyuki']}/>)

        expect(getByText('Giovanni')).toBeInTheDocument()
        expect(getByText('Miyuki')).toBeInTheDocument()

        unmount()

        render(<List initialItems={['Julia']}/>)

        expect(getByText('Julia')).toBeInTheDocument()
        expect(queryByText('Miyuki')).not.toBeInTheDocument()

    })

    it('should be able to add new item to the list', async () => {
        const { getByText, debug, getByPlaceholderText, findByText } = render(<List initialItems={[]}/>)

        const inputElement = getByPlaceholderText('new item')
        const addButton = getByText('Add')

        await userEvent.type(inputElement, 'New')
        await userEvent.click(addButton)

        // debug()


        await waitFor(() => {
            expect(getByText('New')).toBeInTheDocument()
        options:{interval: 10000}})
        // expect(await findByText('New')).toBeInTheDocument()

    })

    it('should be able to remove item from the list', async () => {
        const { getAllByText, queryByText } = render(<List initialItems={['Miyuki']}/>)

        const removeButtons = getAllByText('Remove')

        userEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Miyuki')).not.toBeInTheDocument()
        })
    })
})