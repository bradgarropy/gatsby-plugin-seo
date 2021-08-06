import {render, waitFor} from "@testing-library/react"

import {mockTwitter} from "../../../test/mocks"
import Twitter from "./Twitter"

test("includes twitter meta", async () => {
    render(
        <Twitter
            card={mockTwitter.card}
            site={mockTwitter.site}
            title={mockTwitter.title}
            description={mockTwitter.description}
            image={mockTwitter.image}
        />,
    )

    await waitFor(() => {
        Object.keys(mockTwitter).forEach(key => {
            const meta = document.querySelector(`meta[name='twitter:${key}']`)
            const content = meta?.getAttribute("content")

            expect(content).toEqual(
                mockTwitter[key as keyof typeof mockTwitter],
            )
        })
    })
})

test("includes default twitter meta", async () => {
    render(<Twitter />)

    await waitFor(() => {
        Object.keys(mockTwitter).forEach(key => {
            const meta = document.querySelector(`meta[name='twitter:${key}']`)
            expect(meta).toBeNull()
        })
    })
})
