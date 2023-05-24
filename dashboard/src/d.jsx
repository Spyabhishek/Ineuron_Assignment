import React, { useState } from 'react';

const Dashboard = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`dashboard ${theme}`}>
            <h1>Dashboard</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores est officiis magni, quia, minima veritatis autem ratione, earum optio rerum ea molestiae repellat. Numquam consectetur culpa veritatis excepturi magni eum tempore beatae obcaecati, libero suscipit itaque vitae ex laudantium totam, officia reprehenderit maxime modi enim sequi amet, repellendus quo. Suscipit quo iusto explicabo soluta rem dolor deserunt laborum porro, ducimus similique nam quas laudantium vel. Veniam cumque error placeat quos quibusdam officiis blanditiis. Dolor eligendi similique explicabo quae repellat labore quisquam, laboriosam sint fugiat corporis quas ea consequatur, veniam, neque reiciendis. Obcaecati, recusandae inventore at maxime sequi magni? Saepe asperiores provident nisi dolor nulla facilis a animi nam amet vel minima quae in, labore nihil. Quo, dolorem commodi voluptatum a quaerat minima sed expedita quibusdam. Error atque natus accusamus ipsa ducimus. Maiores dolorum veritatis ut harum necessitatibus sapiente dolorem consequuntur, doloremque fugiat? Fuga laboriosam velit architecto eum obcaecati. Quam autem culpa recusandae earum optio corporis vitae. Culpa ea sequi nobis sit at, minus neque vero dolor quia debitis libero nisi autem magni cum sint, optio in sapiente porro, quo accusantium illum esse? Accusantium similique doloribus, delectus saepe necessitatibus quasi debitis odit libero corrupti minus magnam provident ad. Iste maxime eos accusamus? Iure labore fugiat asperiores dolor ut veniam in cupiditate aspernatur, adipisci neque ipsam ab quasi, recusandae molestias ex, eum deserunt facere! Totam veritatis dignissimos nulla? Amet molestiae, rem accusantium, velit quos tenetur libero perspiciatis reprehenderit autem sapiente fugit quis ipsa aperiam. Consequuntur illo odit accusantium deleniti minima? Quia atque fugit quae illo est sint accusamus natus quis repellendus libero! Sunt et voluptatem ullam sit, ut voluptas labore minus delectus nobis laboriosam ducimus ab excepturi veritatis, accusamus quia, repellat cumque nulla quibusdam molestias. Quibusdam, iure praesentium soluta dolorum expedita assumenda adipisci doloribus voluptate ipsum vero laboriosam, error, quam tempore!</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default Dashboard;
