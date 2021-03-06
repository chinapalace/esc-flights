import React, { Component } from 'react';
import GridList, { GridListTile } from 'material-ui/GridList';
import './Car.css';
import Header from './Header';
import Background from './Background'
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#b68cea',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    margin: '20px',
    height: '100vh',
    width: '74%',
  },
  photos: {
    height: '280px',
    margin: '10px',
    animation: 'gridList 20s linear infinite',
  },
};

const tilesData = [
  {
    img: 'https://static1.squarespace.com/static/561731c7e4b051d6d4403b0a/t/56722e1f3cb8d60a4cf77351/1450323487599/Vintage_Toronto_Poster_smaller.png?format=500w',
    title: 'Toronto',
  },
  {
    img: 'https://images.bigcartel.com/product_images/130358619/vintage_paris_PRINT.jpg?auto=format&fit=max&h=1000&w=1000',
    title: 'Paris',
  },
  {
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFhUXFRgVGBcXFx4aFxUXFxgXFxcVHRcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICUvLS0tLS0wLS8tLS8tLS0vLS0tLS02LSstLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAGAAMEBQECBwj/xABPEAABAwEEBAgJCAgFAgcAAAABAAIRAwQFITESQVFhBhMicYGRodEHIzJSU3KiscEUFjRCYoKSshUkM3OT0+HwF2ODwvE10kNUVZSjs+L/xAAZAQACAwEAAAAAAAAAAAAAAAAAAwECBAX/xAAyEQACAQIEAwYEBgMAAAAAAAAAAQIDEQQSITETQVEUIjKBofAzcbHBBSNCYZHhUtHx/9oADAMBAAIRAxEAPwDsd83m2z0+Mc0uEgQInHnVH8+KXoqns96k8Ofov32/Fc8WepUlGVkdHC4eFSF5B1896Xoqns96Xz3peiqez3oFWZS+NI0dipdA5+e9L0VT2e9L570vRVPZ70DAJ35O/wAx34T3KeLInsdHp6hp896Xoqns96z896Xoqns96C/kz/Md+ErR7CMCCOcR71HGmCwVHp6hv896Xoqns96Xz2peiqez3oMp2d5yY48zSVh9B4xLHDnBHvRxpk9io+2Gvz1peiqez3rHz2peiqez3oJY0nAAk7hPuWz6LhiWkDeCEcaYdio9PUNPntS9FU9nvWPnvS9FU9nvQY2g44hrjvAK0NN0xomdkGepTxZh2Kj09Q2+fFL0VT2e9Y+fNL0VT2e9Bb6LgJLXAcxCbbSccmk8wJ9yOLIOxUenqHHz5peiqez3pDh1S9FU9nvQNUpEZgjnELLKDnYtY48wJ9yOLIOxUenqHPz4peiqez3pfPel6Kp7Pegh1neM2OHO0j4LRHFkR2Kj09Q7+e1L0VT2e9Y+fFL0VT2e9AwKyVHGmV7HS6Bx8+KXoqns96srk4QMtLnNaxzdETyoxxjUVzRFfAD9rU9QfmV4VZOSTFVsNTjTckg4SSSWk5gPcOfo332/Fc8hdD4c/Rvvt+K56slbxHYwPwvMSSS2CUbBNCKanCdxqNbTaNAlolwOliYOToQy1P2QeMZ67feEKTQucIy1YU3/AHzUoPa1jWkFs8qdpGohU1rtbbRaaRAMHi2kHbpY9GKlcMh4xnqf7iqu52+Ppeu33q0nrYVShFU8y3swivy/HUXhjGtPJBJM6ycIHMtbiv19aoWPa0ckkFsjKMMSVW8LG+P+433u7lpwVH6wPVcpzPMVVKHBvbWxrTr8Ra3lrQRpubH2XOnBW3CipUcW2djdLTE7+SdswBzqkvU/rT/3g+CIOEd6OowGAaTgeUdQByA1oWzJku9Bpa2NHXj8lpNpvIdUDRDWyABqkn369iH/ANKu+UfKNEaXm6vJ0OdXV80RaLOy0NHKa2SN31h0GT1oXUSbL0IRaba11TDC9bSa1kL6UEEcsGS4AYmIOYI6lD4H1HNZUJAFMYlx2wMOYDFQ+DFuLKop/VqYRsdqPw/4UvhLXbTa2zUxotPLdGwkwOuT0BTfmLyW/KXPXyKm9rebTVbhDZ0W7SCczvxRHf8AfJs5YxjWmQTjMADACB0oTsY8Yz12/mCuuGjfGMP2D+Y96hPRsZOEc8Y8tSRcvCKpVrNpvawB0wWggggE6ydipOEVLRtNQDKQfxNBPaSt+Dg/WafO78jlnhR9Jf8Ad/KEN3RMYKNW0en3KpZBSWsKo9o3RVwB/a1PUH5kJsKLeAI8bU9QfmV6fjRlxPwpBukkktpxAe4c/Rvvt+K58ug8Ofov32/Fc+AWSv4jsYH4XmKEgspQkm0yCrG56lJtQGt5IEjPygRGXSq6FtCCJRurBFf9vs9VktJNQQAYcMJk7tqpbJW0HsfnouDueDMJkLMIbu7lYU1GOUKLReFjrEOqB0gRiHc8cjNZs9usVIl1MGYjJxPNykLQswrZinZ42td2+ZNslopm0GpW8kuc+MTiTIGHP2Kfwgt9nqslpJqCA3BwETjmIVCQtCFCegx0k5KV9gh4O3rTpMcyoSJdIwJzEHLmVXeZpGoeJ8iBtz154qECsob0sCpJSclzLK4atJlTTqkjRxbAJx3wpXCO20aoaaZl4ME6JB0Y2kaj71SQlCL6WIdJOee5mm6CDsg9WKJ7RelkrxxrXAjKQ7Cc8WHFC8LCE7EzpKdm/QKLNa7DSdpsnSEwYeTiIPlbkPXlaeNqvqDAOOE5wMB2BMQsEIbuRCkou92/marUhbJKBhoAi3gF+1qeoPzIXaEU8Av2tT1B71en40ZcV8KQbJJJLccMoOG30b77figCEf8ADYfq332/FBAslSJ4t8bdErJW8R18E0qWvUYDVnRW4C2DUk2XGw1ZDU5orOioJuaBq20VsGrcNQFxrQS0U+GKysll0cSOV7tyq3YpOooogU7uJEkxuhSRYGbDzyVNLViFXMzJKtN8yCbvZlHaU1Vu0fVOO9WcLGijMwVWa5lA+i5pxELWFfVGAiDkqy0WYtO0HIq6lc1U62bR7kTRSDU7Cy1qkbcZhaFqkOatCEEXGdBLQT2iloqQuNAIo4CjxtT1B70OBqJuBDDxlQxhoDHfOSvS8aM2Kf5UgxSSSW44hAvlgNMSJhwPSqkK4vdwFPEgYjNU7Hg5EHmM+5KnuMjexEr3XTe4uIM64MAnbzqKbhxwfhqkfGVcrYJbimOjXqR2YL1ruqNJGiTvAkFR9FGITdWx03AgtGOsCDO2dqW6XQ0Qxn+SBINW7QiV900iIAjeDj2ph1xt1PPSAe5UdOQ5YumyBYKX1ugKYQnKVhLRAIKjWu1Np+UcdQBBPZl0pWSbdkhNSrG7k3oblQa94tDg1o0ycMDh1qvtNtfVOiMB5o185RBcly6A03+XmPs4ER2rZDCKCvU/gwSxTm8tP+R5liJbORjI7YylQWVMSxwLXjNp2bQfrDeiHRVZwhs2lRLh5TOU0jMRn2T1Jboxei0GqrJakMhMWmlpNjXmOdM3beAfyXQHdjv67lO0FnlFwdmaac0+9EpQEoUuu1ocZB6/6LWWeY78f/5Vzfmur2I8LQtVjZ7Sxn/hA+s6fgnm25gOlxDZ5/howpsupRzkto/QqG0zqBPQpdlux78xojaR7hrU831GVID739Fr+mz6P2v6KyUeoqc6zWkbeaN6VysBkuLhsy9yILkpBpIaIEfFDn6Z/wAv2v6K64N2/jHuGjENnOdfMm03HNoY60KzjeYQJJJLUYyuv2sGUpInlAQFTsruIwpOHOQPeVeXs6GdIVSKiTPcdDw7Eepb9HyqbhvwjrCZN7s2FMcJL9ZZaJeWl7jgxgB5ZkTjBAABnHYud0eGRa5gq036JIaXkRgc3kAZjY3V1KFTqNXiWVWgnlnozpovinsd1f1Tgvinsd1DvQ3YKzazWvpHSa7IwRMGMjjqKuqN2COU7HcO9JzTNcqVFK5MF709j+od62N80wJIdHR3oava3Mou0GkVHawMNHcTt3Iftd41KhxdGxoT6NCrN66IxYivh6S7t2wzvDhQAPFD7zshzDX0odqVi86TnSTrJz61TaLjrJ6U+2mcySTvXSjShBaHHlWqVHqg1sIo2aiK7jpzDZZjiQZE4bD1K5u63srM4xhw1g5tI1HYufWa31GN0A6WHNjgC0zngVGxx2HVqSJUFLd6j44hxtZaB1auEdJlVtMcoHBzwcGkmOkbYOCmWy9aNJ4ZUdokicQYjEZxAyK5zoLao5zjLnEnKSZPNJR2aGmoLE1NdAov+yUNHjKJbpEzyHtiPO0ScTzKJdPCNginXaJ1VNR3OGrnVBoJi0WcnFpg9hUvDwcbPUhYmopXSsHdprUScaR5w5Q3Np7H9Y7kKXbeVRnJiQPqnVzHUiSy3nZXQHPew/abgDziVgqYapF6anZoYyk46tp9GPaLPtdncsgM2O6x3KRXscDSa4ObtGzbvCjFZXdaM3xakrpjNRo1TCr33lQD+LNamHzGjpCZ2c+5WPCBws9kq13HlBsNH23ENbO3Eg9C4hMtcTiSZJOsnElaqGGzptmHE47htRirnag1EPA8eMf6g96B+Add9ayMJlzmlzCfVPJk8xCPeCtItqPkEcn4pcIuNSzG1KinRuuaCZJJJbTmAd4Vh+o4elp/FcmZb7QBAr1QP3ju9df8JjJsUf5jPiuUCzIzJD6dNyVyvtFR7jL3OedrnOJVXe2Tcszt+KvLdT0QNWO2FSXscG46z9aVqpu8Dl4mOWu172J1gvi0spMZSqPa0AxokDMnDbrT1m4S19Mt42q0+TBqOcHTgZ2alEsDvFtx2/XjWdSh0hNpbvqN1zrCiUIpXJp1pudn8i7q2xzj5cbhgmA4TpaWOczj1rV1Fukc/KIzG1k6vtFaCgIGeW0bAdm9Tw78weJSdrFvQvxrcKjmxGYgHqJgqxo29hzlvP3oIvaiBHMdexF4sm5KqPIacMlWvoWmisxtVYyzEZSFh1mJxOPOlcU09lLJrpdAGCe4tVTLORlI5ll1nJzlRxSeyli5qYFZskFwHSFDNjWPkm5TxiOyEzkky1zZ5xjuTrqU6lXfJFsKDhkTzSjih2UuLDbH0fIMDW04tPRq5wryy33SfGnotdvIjoKB6lmJzk860Nl3Jc8s9xtOnOGxYeFG9Wuo06THgy4vMEHyRAGG9/YudGgW0wSMHAkc0wrPhIyHBu1o7XHuWL7YAxgGQBb0ADedi10Y2gcvFT/Ot72CrwY3vTpWeqyo8N8dpAHYWNGQ9VdM4J3vSq1Xspu0iGBxgGM4zK4TwXbPGDZon8y6r4LKUV6x/wAsfmWecVnubqd3QXvmdKSSSUigc4ex8l5RAHGNz6VzO1VmMAd5QJjAhHfhaqhtgJPpafxXHbPbQ/kiYzg5bEuVO7ubaFdQhl5lnedpD2tLQ4Q6DlsQ9fEw3PM5x8FZ1co+EqrvcYNw1n6sLZSVqdjkYuWbEN/L6Eq754tuevzdp2qNYhNrpj/OZs84bFIu9vi24bfqzrOuVBaYtAjDxg3RiOpXn4RFF2q+f3LCrU0az844x2r7Te5PtmBzDVuaq+qeWfW+LU5Zq0QDEdOGAVovQpVjeTaGr5yHM5dIdRa1pcTgBJ5gJK5tfGrLJyJb1vh2kQ1xLHckDIQQAdW8rJioOcope9jq/hdWNKnOUv2+5Yfpyyel9h3ctH8ILGM6vsP/AO1D/EU/Nb1qrvSm0PEAeSMjvKl4OK5v35FY/jFWTtlX8P8A2dHbUpaDammA14BaThIIkYcyj2q30mgaPLnYckOWas40qYJOiGNgTgIaBgtwsvBs9WdR4ptaIKbE9tRmkMMYI2Jx7WASXNA2kgAdKDxfXFh9MTBkHAc2ai/LGP5Gi7HDUhYeTe5WWOhGF7XaQRm/7PtKbo8JLOXFsPEazogHml0oZqWcAkQc2bJxJmCol42cNeIByGZG07FreFhY5MPxStm1fogivC+6he9tJrQ1omSOVEDGJjNR7q4QVH1KdJzWHScGl2RxOcDBQnOBfVIgjR59W5QbvqltZjhEh7TjzqXSjw9uQRxVXjvvO1/K1y34U04tjG+oeokqLfzpYOc651esU7eFpNW2Mc6AdHVuad/xTd/+QOfbu5ymUU1TVzNi5KWKdurGuCdpbTNZzgSAxpgZ+WG6/WXVfBZeTKtesGtcIpg4x524rjN11ILx5zIPQ5rvgupeBX6RX/dN/Os84LNc6NKq+DkW39nXkkklBQCvC7Qc+7y1gk8bTMde1cQsx4t5DxBAgjPHDYu/eEL6J/qM+K4jel1PL31JaGkzjOGAzhuCdGF4XMzxOStle1rmgtDXZYxtB+CgXvk3nO34ooslgpaIhomIJE5jPtUSrZ6bnAOaI0tECZBxAOJEg4jJPjTtGxhnilUqOViru+OLblr27Sq6uYqkjU6f7lXVns+iAzSbIJGBdGJw+qq2z2cVK7mmdZ5Jk4RuMoa0sWhNKTkZmTOOY/2JDL+9gVu6wMY5kSZ0gQ6HYtaIwA7CE7aKDYfLGiGPIAZIkNMcrQGW2dSnKUdZN6A9bHkgTqlSuNBFIA4g49e1R7TQdo6ejyQSJ3xklQ8pvOPelTWqNtF92Vi8k7+sKpvcnTHqjWNpVto8/UFU3sOWM/JGobSnS2MFLxGlleRJByb3KyFnf6V34f6qqpOgHe2Pcr4N3e0NyTCKbdzZiK04KOV2Ku2WQtaX6RJwzbtPOo9iPLEx0qyvEeLOGzXvVbd48Y2J6MexWcUnoKhVlKLu+pOrAScs6eWWblEvUDTGI8nVzlTa4Mkwc6eqJxcod7HljPydm8q7FQ3RpZKkF42tOuP+VGpv0XA7CCnGfW5kwDj1Jf6TQtJt/uWNjq6doDsuScupP3/+zGefw51Fun9t9w+8KTf/AJA51aPgE1HeuU93DlHm+IXVPAt9Ir/um/nXLbu8o83xC6v4GKJ46u/CDTA3yHBZ57nSpSWXU6ykkkljAZ8IX0T/AFGfFcvr0yRhEjKe/Ujnw2PIu0kEg8dSxGGsrhNK8njPlc+fWtVGdo2OZi6DnUzJ8gopWkse7ZJkdPvT3Ht4zFw8rU4xmIybAw93Shxl5NO478usKEy2v09KRjhuhMzieA2X1PCpOEaU9uatr3vKlTZJIJJEBpEkSJPVrVLpQJdA93WVR2+o1z+TEZSBnvRmsgVLiSV+QVWa0abw8OmAdGNWBwwB9xUujRBIaWDFrgZZESNRFNpywzGaFbprNALTAPaQdU61cCu6dLSx26+tTGRSpTs7Iu3seQWPY1zCC0xhIMDzsNapbNwfcYcKwImY0NmrNOi8ann9g7lGYYMjAzPSDMqXZlIOcE7OxYPsZBPJ156Ig9qrbxu55cC1oiIJwAGJzxwzUl9tqHN5/vmWhruiNIwd6h2JjKS1GaPB+tDi9wYAJGAdOew4ZDrVhxRA0i3CNm2AFGFofEaToiInsSNd8aOkY2c2SEktglOcvEyRVswc0tIdnHJA+qd6j2O7XNr03Ma7RBlxcRI8oZDVgFllpeMjvyWzbW8ODtYwyzCNCM0kmkPWuzucG6LZjROerTeU3aLPi0OYJO0AnPaVvVvB7hGiBliAQcDI1rYXhMadMOI16/cp0KpyRV1Lrq6T4pmCMFFddlUM0gx2lpERGQAEHtPUri8L3qwQxoAIicyNvZuTVlvCoRDmjARsJO3qVWo7Do1Klruxpdd01mv03NEaBGYOJIjKdS2vuyvcwBrZM6v+FIs1vewRoyNU6k3UvSM9Ec5U6WsUzzc8zGbHdTGNNQPJOALXACJI1rofged46uMIFNpgEZlxnIDYFzilegpmQQTEZFdD8D16mtaK4IAApNPtc5S55crNFB1HUV9jq6SSSyHWADw3/wDTD++pe8rz+vQHhv8A+mH99S95Xn8BOp7Gat4jCS3FM+aepZFB/mO/CUwVcsG39W0NAkHCA7Jw6Qq59QnMkwI6Ni3Fkqejf+E9y3Fhq+jf+EoIWVbGLLbH0yC0nDGJMdi6XYnUagBY5rsMYdPPgDgubi7avo3dS2F1Vs+LPZ3qUKqwjPnY6iLMzzR296z8mZ5o7e9c6s9K2tPIdVH+pI6i6FeWS23kM6TX73AA9bXAdikyypSX6kFJsrNg9pamxs3dqh2G0Wp37Syxva8HsPerMU3eaUadRLzoY+Rs3dqz8kZsHtKUyzznI6E4LJvPUqOUVzLJVHyIYs1PY32ln5OzzW+0pZsewpt1mP8Ac9yFKL5g41FuiLWFNokhsD7Lj2DFUdrv5owp2Vz95YWjqgn3IkNA/wBz3JqpZtrexW06gpNboCrXfFofEUAyJypuMyI1ztTQvO1QYp4kzPFY5AbI1BGZsrfN961Nlbs7UZS/Gj/iAdaraXeVxvQ0gdQEKL8lqejf+E9y6G6yBNOsh1QjKWWIXQAfktT0b/wnuXSfAbRc202jSa4eJbmCPr71AdQdsRf4MWkVqsgjxY/MqTXdNGHrZqiR0VJJJZzqgn4TfoX+qz4rkwj+z/Rdc8JLg2wvc4SGuDox+qCdS5hVfFRlJjWgtYaj3a2YaDSROuXnZyZTqb0Obi/ieRBY4ufxbGlxEF+ODAcpwzOodKsKd3vOeiOc9yk3fYmUmubTYfKJcSXOJcQCSXOOJUz7vv70wxSlrp9yBSsDTPKGB1f8nWD1J5t3tGs9fcovB+uajalTRwNV7RnADORhB1uDj0q1APme/vUorPMna/1Gm2Zo19p71WX3fdOztOjDqmpuiR0kxkrmPse/vVPwhuf5S1ugQ17CSDiQZiQc4yGKAptZlm28yLYeE9XDjrLWG9lN0dR3Rir2w3rTq4NLgdj2uYfaCHODl5Wg2p9nrFr9FrpMZFpAkFsSMdYRaObsPeodhsu69vVjoeNvanGu39pTIP2ew9620vs+/vS2iYyfu4+Km9ZFXeo+n9n396Wl9n396rkRfO/dyTxu9YL96jaf2ff3paR83396jIgdR+7jjxzdqbLdze3vS0j5vv71guPm+/vVloUdmaObub7XetHAbB7Sdk7Pf3rGkfN96tmZTIvaGCBu7VqSN3apGOzsKxJ/sKcxXh+7EXSGwdveirwfHxtTD6g/Mh4z/YRNwDHjanqDV9pRKV0Ow0GqsQ1SSSSDtAN4Zazm3a7REudWosA26TwI6RK5TdFUB1pc/lFx0Hu84U28s7hpPeANQaBqXWvC0B8iZOQtFJ34dJ3wXC7PW/U3uM+NeKe/xjtJ+A1+MePuptPYw4qN3b5fX+gguq9dOhQBkvqkl59Ul1TDZI0fvK2qW2m4OYSdbTtyxgDHWhC6nnj7Q4ucxlPSIaIDgKpD3iR5OLQcDO8Yq0um0ltkdUy0m1ap28oucJOvCE1Mw1aavde76ltwYpaFmpt5U6OkSQRJeS8573KzqVQ0FzjAAknYFCoGoGtAGQAy2BUHCy9HCKMjU50dgPvV1ohKg6k/mMX3f7qhIYS1moAwXbz3Kjsl41KT+Mpug9YM6iNajPfKtrluGpWcxzmxTLhJOEtGJjniOlV3N9oU42ewQcCrI6H2h86VQwCcy2ZJ6T+VFAO9NMaAAAIAwAGQAyCyrWObOeaTkOzvSnem1iUWK3HQd4S+8O3uTSSixOYd+8O1Kd47e5NLCLE5h6d47e5YJ+0O3uTUrCLBmHZ3jrWJ3hNLMqLBmHJ3hLS3hNLBRYMxpa7SWaLpw0g0/eOiD+It6JRh4PnTVqeoPzIJvGz8ZSqU8tJjgCNRIwPXCJ/BFbuOaaut1EaW5wdDh1gqs9masLd1Iv8Af7HSUkklmO2Afhqfo3Y92x46y17R+ZcSuig4GzcZIa1tSqG6gAPLO1xL53ADeu0eHJhddmgPrWii3rcuQX7WDTXPmWdlMbuNe4e5oTYbGPEeJLr/AM+5V3HaXCrUe7/xqNWpjtDnYey5F1oGhZXUmgaIpcWNsEaOaFbwo8X8iwxNMsPO8AH/AOwokvOvg5mx1EdL6oEdUdaYjLV7zTXuzsXFS2uAJiYBMAYmEGssD6pdWr6TQ50BuT3vdg1oBy6kVpi0gF1MHzi7qa7HrIVzPTlk2K6vwXYyk2ZLy+m0nSw5T2tIiMoJRc0AYAQNiobwnRBByexx5g4T/e5TBUO09aEUnmkldlmkqzjDtPWs8c7zj1qbi8hZSko7KTsy89CfCCtjZYWJSlBBmVgrCSCTKwsJIAysJLCAMrCUrQzuUEmSnvAq9zLfbbPPJYC9vNVe1wHR8Soh0/s9qn+CV83rbsBhQpNMZEgg/EJdTY34D4h2BJJJZzrgP4X2zYqc/wDm7P8AnXB+EdE6VQCoXaVenSjCD4vTB8kHAuAXffCo9ostAvIDRbbNpF2AA4zElcdvVlKrb6VNmgWuvAE6JBBYyjZcJByPL7VZSsrCJwblchcI7CaRsxLy+KzRi5pjFp+rl5Ks7xp7oJtNGd+iWH/arTwk3dSbSs7mNH0um0wdRDsFPvO6aWnZwGnl25zDifJYyt8aYV+IjM8POy/Yr0qrQXNdokRIwOGPONyLHcHaJ1O/Eq62cHxTxa52hz5f3tVuLFiey1EUdrZLHDIkQM8zlit9m3XuU11idkKr9WvYnRZnHOp+ISO1TnRV4efQrUlbu4P1Ti0sIO+PdgmKl01GNc5zWkNxPKy5sRPNzKc8eot0ZrdEAOIyW3HO2nrTjWNc0wIcCIGlmMZMHPVkdabdRcM2uHQVa5TKLj3bSlx7tqbSKCtkO/KHbVn5U7cmJSlAWQ/8pdt7Fu2t9v2VEUa02LSMmpVbua8tHYi5OVFx8obt7Cotovek0SS47gxxPVCrKd3QZ46sccjUJHap0ouwyRQ5Zr5pPMN4yftUntHW5sdqk/KW7exVlpc8DxbWuOxzi0dYaVEZWtM40qQG0VCezQRcnhp6r6l6bS3arXwOODrVaXjN3HdIbVYxv5UM0i6OUADuJI6yArvwHv8A1uuP8hzvxWmp3BLqPQ04ONp++jOzpJJJB1jnPh7/AOlH9/S95XnCF6p8JvBqteFiNmoOptfxjHzUJDYaSTi1rjPQuSf4G3l6ax/xKv8AJVkykk2cxaIyUhltqiIq1BomWw9w0SZkiDgcTiNpXRv8Dby9NY/4lX+Sl/gbeXprH/Eq/wAlTdFcrABt9WkZWq0fxn/9yk0eFNtaIFrrRveXfmlG3+Bt5emsf8Sr/JS/wNvL01j/AIlX+SjQLSBChwwtjTjW0vWY0+4AqbZ+HdqBxbRcNha4flcERf4HXl6ax/xKv8lZHgOvL01j/iVf5KLoMrIF3+E2pT8qzseNgeWidolrl0e6rwpWmiypNOXtBc1rw4Ax5JykjeNSB/8AA+8vTWP+JV/krA8B15Z8dY5/eVf5KhpBlfNB5VuKifqkcxjsTB4PU/queOYoWoeCK+WeRbaLfVtFce6kpo8HPCCZ/SNH+PV93EovLqUdCD/SXT7gBzrVOnFNfNtvpHdQVc7wf8ITB/SNnw2VHjriz49KVTwfcIXCDeNn6Kj2nrbQBRml1I7NDoW4uFvpanRA+C2/QTfSVfxDuQ6PBjfwBH6Rp45/rNf38VgtD4K78/8AUKf/ALq0fy0XfUngR6BP+hGefV/F/RNvuJuqpUH3kNU/BRfbfJt9Ic1qtH8pT7HwA4QUzIvCzO3VKlR4P46BjohRd9SeDHoTK1zPGVVx5+UP76FArWKoM6bX+qIPU2D1hEl3cHr4B8f+j3jaypWY7nxpEHsV3W4P1Q2ToOywEk4mPNUqbQuWFi9jmb2t+007HCe0QexMlH77qc4GaLyNhpv9xEf8KPV4LtLQ7iX4zgGPBEbQG4ZpiqoRLBy5AQrLwFH9dtI2WcD/AOeofirt/BQejrdDH9eLU74LOBtex2q01qpboPZotADw7Go54kPY0ZETBOKrOSa0G4ehKErs6akkklm0SSSSAEkkkgBJJJIASSSSAEkkkgBJJJIASSSSAEkkkgBJJJIASSSSAEkkkgBJJJIASSSSAP/Z',
    title: 'Tokyo',
  },
  {
    img: 'http://valodesign.info/wp-content/uploads/best-25-travel-posters-ideas-on-pinterest-vintage-travel-travel-poster-3.jpg',
    title: 'Budapest',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/originals/59/c7/d6/59c7d6d322718c9c2edaac98b617d3de.png',
    title: 'San Diego',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/originals/1e/01/5a/1e015a7100a6b7a5eac74e744520feda.jpg',
    title: 'Sydney',
  },
  {
    img: 'https://images.bigcartel.com/product_images/158432011/Vintage_MiamiBeach_Poster_Print.png',
    title: 'Miami',
  },
  {
    img: 'http://www.pictorem.com/collection/900_Venice%20Vintage%20Travel%20Poster.jpg',
    title: 'Venice',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/originals/79/4d/19/794d198a579d8b85502e7879f911ca9c.png',
    title: 'Barcelona',
  },
];


export default class Car extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={2.2}>
            {tilesData.map((tile) => (
              <GridListTile style={styles.photos} key={tile.img} >
                <img src={tile.img} />
              </GridListTile>
            ))}
            <Background />
          </GridList>

        </div>

      </div>
    );
  }
}

