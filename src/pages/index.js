import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="Evmos Docs">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: '750' }}>Welcome to Evmos Community</h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="welcome-to-evmos/introduction"
                header={{
                  label: "📚 Learn about Evmos",
                }}
                body={{
                  label:
                    "Come learn why Evmos is the flagship EVM",
                }}
              />

              <Card
                to="get-involved/community-calendar"
                header={{
                  label: "✨ Get Involved",
                }}
                body={{
                  label:
                    "Explore our wide arrays of community events",
                }}
              />

              <Card
                to="learn/keplr"
                header={{
                  label: "🎓 Solidify Your Foundation",
                }}
                body={{
                  label:
                    "Dive into the world of EVM meets Cosmos by exploring our ecosystem",
                }}
              />

              <Card
                to="meet-the-team/core-team"
                header={{
                  label: "🤝 Come Meet Us",
                }}
                body={{
                  label:
                    "Meet the brains behind the Evmos project",
                }}
              />

              <Card
                to=""
                header={{
                  label: "🛠️ Launch dApp on Evmos",
                }}
                body={{
                  label:
                    "Learn everything you need to deploy an EVM-compatible smart contract",
                }}
              />

              <Card
                to=""
                header={{
                  label: "🦉 Protocol Development",
                }}
                body={{
                  label:
                    "Access your portfolio with a wallet built specifically for subnets on Avalanche",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home