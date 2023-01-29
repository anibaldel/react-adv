
import { Suspense } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>...cargando</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                    {
                        routes.map(({to,name})=>(
                        <li key={to }>
                            <NavLink to={ to } 
                                className={ ({isActive})=> isActive ? 'nav-active' : '' }
                            >{ name }
                            </NavLink>
                        </li>
                        ))
                    }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(route=>(
                            <Route 
                                key= { route.path }
                                path={ route.path } 
                                element={<route.Component />} 
                            />
                        ))
                    }
                    <Route path="/*" element={<Navigate to={ routes[0].to } replace />} />
                </Routes>

            </div>
        
        </BrowserRouter>
    </Suspense>
  )
}
