// create a bot icon component import { FaDiscord } from 'react-icons/fa';
// import { FaSlack } from 'react-icons/fa';

// export const DiscordIcon = () => {
//     return <FaDiscord className="w-6 h-6" />;





// };
// like the above but with a bot icon

import React from 'react';
import { motion } from 'framer-motion';

const Boticon = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-16"
            style={{
                backgroundImage: `url('/testimonials/logo.png')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* make the image size larger */}

            <img src="/testimonials/logo.png" alt="Bot" className="w-full h-full " />
        </motion.div>
    );
};

export default Boticon;
